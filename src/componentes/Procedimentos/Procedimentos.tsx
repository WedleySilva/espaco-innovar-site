import { useMemo, useState } from 'react'
import type { ChangeEvent, KeyboardEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { tratamentos } from '../Tratamentos/Tratamentos'
import './Procedimentos.css'

const normalizar = (texto: string) =>
  texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

const palavrasRelacionadas: Record<string, string[]> = {
  rugas: ['botox', 'toxina botulinica'],
  linhas: ['botox', 'toxina botulinica'],
  hidratacao: ['skinbooster', 'limpeza de pele premium'],
  hidratar: ['skinbooster', 'limpeza de pele premium'],
  manchas: ['peeling de diamante', 'peeling quimico'],
  cicatrizes: ['subcisao para acne', 'microagulhamento com ativos'],
  acne: ['subcisao para acne', 'limpeza de pele premium'],
  flacidez: [
    'bioestimulador de colageno',
    'fios de pdo',
    'radiofrequencia',
    'ativos para flacidez',
  ],
  celulite: ['subcisao de celulites', 'reducao de celulite'],
  estrias: ['tratamento para estrias'],
  pelos: ['depilacao a laser de diodo'],
  depilacao: ['depilacao a laser de diodo'],
  inchaco: ['drenagem linfatica'],
  relaxar: ['massagem relaxante'],
  massagem: [
    'massagem relaxante',
    'massagem terapeutica com ventosaterapia',
    'massagem modeladora com pantalas',
  ],
  medidas: [
    'protocolos para reducao de medidas e emagrecimento',
    'massagem modeladora com pantalas',
  ],
  emagrecimento: [
    'auxilio no emagrecimento',
    'protocolos para reducao de medidas e emagrecimento',
  ],
}

function Procedimentos() {
  const [pesquisa, setPesquisa] = useState('')
  const [pergunta, setPergunta] = useState('')
  const [resposta, setResposta] = useState('')
  const [carregandoIA, setCarregandoIA] = useState(false)
  const [modalIAAberto, setModalIAAberto] = useState(false)

  const resultados = useMemo(() => {
    const termo = normalizar(pesquisa.trim())

    if (!termo) return []

    const termosExpandidos = new Set([termo])

    Object.entries(palavrasRelacionadas).forEach(([chave, valores]) => {
      if (
        normalizar(chave).includes(termo) ||
        termo.includes(normalizar(chave))
      ) {
        valores.forEach((valor) => termosExpandidos.add(normalizar(valor)))
      }
    })

    return tratamentos.flatMap((tratamento) =>
      tratamento.procedimentos
        .filter((procedimento) => {
          const texto = normalizar(
            `${procedimento.nome} ${procedimento.descricao} ${tratamento.categoria} ${tratamento.titulo}`,
          )

          return Array.from(termosExpandidos).some((item) =>
            texto.includes(item),
          )
        })
        .map((procedimento) => ({
          ...procedimento,
          categoria: tratamento.categoria,
          tituloCategoria: tratamento.titulo,
        })),
    )
  }, [pesquisa])

  const enviarPergunta = async () => {
    const perguntaLimpa = pergunta.trim()

    const mensagemQueda =
      'No momento, nossa assistente está passando por uma breve atualização de beleza. Por favor, entre em contato diretamente com a Espaço Innovar para tirar sua dúvida.'

    if (!perguntaLimpa || carregandoIA) return

    setCarregandoIA(true)
    setResposta('')

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pergunta: perguntaLimpa,
          baseDados: tratamentos,
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.resposta) {
        setResposta(mensagemQueda)
      } else {
        setResposta(data.resposta)
      }
    } catch {
      setResposta(mensagemQueda)
    } finally {
      setModalIAAberto(true)
      setCarregandoIA(false)
    }
  }

  const pressionarEnter = (
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      enviarPergunta()
    }
  }

  const irParaTratamentos = (categoria: string) => {
    document.getElementById('tratamentos')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent('abrirTratamentoModal', {
          detail: categoria,
        }),
      )
    }, 400)
  }

  const alterarPesquisa = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setPesquisa(event.target.value)
  }

  const alterarPergunta = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setPergunta(event.target.value)
  }

  const limparPesquisa = () => {
    setPesquisa('')
  }

  const fecharModalIA = () => {
    setModalIAAberto(false)
    setPergunta('')
  }

  return (
    <>
      <section id="procedimentos" className="procedimentos">
        <div className="procedimentos__brilho procedimentos__brilho--topo" />
        <div className="procedimentos__brilho procedimentos__brilho--base" />

        <div className="container procedimentos__container">
          <div className="procedimentos__cabecalho">
            <div>
              <span className="procedimentos__eyebrow">
                <i />
                ENCONTRE UM PROCEDIMENTO
              </span>

              <h2 className="procedimentos__titulo">
                Pesquise pelo <em>nome</em> ou pelo que deseja cuidar
              </h2>

              <p className="procedimentos__descricao">
                Digite algo como “Botox”, “rugas”, “flacidez”, “celulite” ou
                “hidratação”.
              </p>
            </div>
          </div>

          <div className="procedimentos__busca">
            <div className="procedimentos__input-wrapper">
              <svg
                className="procedimentos__input-icone"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="M16 16L20 20" />
              </svg>

              <input
                type="search"
                value={pesquisa}
                onChange={alterarPesquisa}
                placeholder="O que você procura?"
                aria-label="Pesquisar procedimento"
                autoComplete="off"
                spellCheck={false}
                enterKeyHint="search"
              />

              <AnimatePresence>
                {pesquisa && (
                  <motion.button
                    type="button"
                    className="procedimentos__limpar"
                    onClick={(event) => {
                      event.stopPropagation()
                      limparPesquisa()
                    }}
                    aria-label="Limpar pesquisa"
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                      rotate: -20,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.7,
                      rotate: 20,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7 7L17 17" />
                      <path d="M17 7L7 17" />
                    </svg>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            <AnimatePresence>
              {pesquisa.trim() && (
                <motion.div
                  className="procedimentos__resultados"
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -6,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <div className="procedimentos__resultados-topo">
                    <span>
                      {resultados.length}{' '}
                      {resultados.length === 1
                        ? 'resultado encontrado'
                        : 'resultados encontrados'}
                    </span>
                  </div>

                  {resultados.length > 0 ? (
                    <motion.div
                      className="procedimentos__resultados-grid"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.12,
                          },
                        },
                        hidden: {},
                      }}
                    >
                      {resultados.map((resultado) => (
                        <motion.article
                          key={`${resultado.categoria}-${resultado.nome}`}
                          className="procedimentos__resultado"
                          role="button"
                          tabIndex={0}
                          onClick={() =>
                            irParaTratamentos(resultado.categoria)
                          }
                          onKeyDown={(event) => {
                            if (
                              event.key === 'Enter' ||
                              event.key === ' '
                            ) {
                              event.preventDefault()
                              irParaTratamentos(resultado.categoria)
                            }
                          }}
                          variants={{
                            hidden: {
                              opacity: 0,
                              y: 25,
                              scale: 0.97,
                            },
                            visible: {
                              opacity: 1,
                              y: 0,
                              scale: 1,
                              transition: {
                                duration: 0.55,
                                ease: [0.25, 0.1, 0.25, 1],
                              },
                            },
                          }}
                        >
                          <span>{resultado.categoria}</span>

                          <h3>{resultado.nome}</h3>

                          <p>{resultado.descricao}</p>

                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation()
                              irParaTratamentos(resultado.categoria)
                            }}
                          >
                            VER NOS TRATAMENTOS
                            <b>→</b>
                          </button>
                        </motion.article>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      className="procedimentos__sem-resultados"
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                    >
                      <strong>
                        Não encontramos esse procedimento.
                      </strong>

                      <p>
                        Tente outro termo ou converse com nossa assistente para
                        buscar uma informação específica.
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="procedimentos__assistente">
            <div className="procedimentos__assistente-topo">
              <div className="procedimentos__assistente-icone">
                <span>✦</span>
              </div>

              <div className="procedimentos__assistente-conteudo">
                <span className="procedimentos__assistente-eyebrow">
                  ASSISTENTE ESPAÇO INNOVAR
                </span>

                <h3>
                  Não encontrou o que procura? <em>Pergunte para nós.</em>
                </h3>

                <p>
                  Tire dúvidas sobre nossos procedimentos. A assistente responde
                  somente sobre os serviços e informações disponíveis da clínica.
                </p>
              </div>
            </div>

            <div className="procedimentos__chat">
              <div className="procedimentos__chat-input-wrapper">
                <input
                  type="text"
                  value={pergunta}
                  onChange={alterarPergunta}
                  onKeyDown={pressionarEnter}
                  placeholder="Ex.: tratamento para flacidez?"
                  aria-label="Pergunte para a assistente"
                  autoComplete="off"
                  spellCheck={false}
                  enterKeyHint="send"
                  maxLength={500}
                />

                <button
                  type="button"
                  className="procedimentos__enviar"
                  onClick={enviarPergunta}
                  disabled={!pergunta.trim() || carregandoIA}
                >
                  {carregandoIA ? 'CONSULTANDO...' : 'ENVIAR'}

                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 12L20 4L16 20L10.5 13.5L4 12Z" />
                    <path d="M10.5 13.5L20 4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {modalIAAberto && (
          <motion.div
            className="procedimentos__ia-modal-overlay"
            onClick={fecharModalIA}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="procedimentos__ia-modal"
              onClick={(event) => event.stopPropagation()}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 25,
                scale: 0.95,
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <button
                type="button"
                className="procedimentos__ia-modal-fechar"
                onClick={fecharModalIA}
                aria-label="Fechar Resposta"
              >
                <span />
                <span />
              </button>

              <div className="procedimentos__ia-modal-topo">
                <div className="procedimentos__ia-modal-icone">
                  ✦
                </div>

                <h4>Resposta da Assistente</h4>
              </div>

              <div className="procedimentos__ia-modal-conteudo">
                <p>{resposta}</p>
              </div>

              <div className="procedimentos__ia-modal-rodape">
                <button
                  type="button"
                  onClick={fecharModalIA}
                >
                  NOVA PERGUNTA
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Procedimentos