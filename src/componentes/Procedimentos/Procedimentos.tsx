import { useMemo, useState } from 'react'
import { tratamentos } from '../Tratamentos/Tratamentos'
import './procedimentos.css'

const normalizar = (texto) =>
  texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

const palavrasRelacionadas = {
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
  const [erroIA, setErroIA] = useState('')
  const [assistenteAberto, setAssistenteAberto] = useState(false)

  const resultados = useMemo(() => {
    const termo = normalizar(pesquisa.trim())

    if (!termo) return []

    const termosExpandidos = new Set([termo])

    Object.entries(palavrasRelacionadas).forEach(([chave, valores]) => {
      if (normalizar(chave).includes(termo) || termo.includes(normalizar(chave))) {
        valores.forEach((valor) => termosExpandidos.add(normalizar(valor)))
      }
    })

    return tratamentos.flatMap((tratamento) =>
      tratamento.procedimentos
        .filter((procedimento) => {
          const texto = normalizar(
            `${procedimento.nome} ${procedimento.descricao} ${tratamento.categoria} ${tratamento.titulo}`,
          )

          return Array.from(termosExpandidos).some((item) => texto.includes(item))
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

    if (!perguntaLimpa || carregandoIA) return

    setCarregandoIA(true)
    setErroIA('')
    setResposta('')

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pergunta: perguntaLimpa,
          tratamentos,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data?.error || 'Não foi possível consultar o assistente.',
        )
      }

      setResposta(
        data.resposta || 'Não consegui obter uma resposta no momento.',
      )
    } catch (error) {
      setErroIA(
        error instanceof Error
          ? error.message
          : 'Não foi possível consultar o assistente.',
      )
    } finally {
      setCarregandoIA(false)
    }
  }

  const pressionarEnter = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      enviarPergunta()
    }
  }

  const irParaTratamentos = () => {
    document.getElementById('tratamentos')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
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
              onChange={(event) => setPesquisa(event.target.value)}
              placeholder="O que você procura?"
              aria-label="Pesquisar procedimento"
            />

            {pesquisa && (
              <button
                type="button"
                className="procedimentos__limpar"
                onClick={() => setPesquisa('')}
                aria-label="Limpar pesquisa"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 7L17 17" />
                  <path d="M17 7L7 17" />
                </svg>
              </button>
            )}
          </div>

          {pesquisa.trim() && (
            <div className="procedimentos__resultados">
              <div className="procedimentos__resultados-topo">
                <span>
                  {resultados.length}{' '}
                  {resultados.length === 1
                    ? 'resultado encontrado'
                    : 'resultados encontrados'}
                </span>
              </div>

              {resultados.length > 0 ? (
                <div className="procedimentos__resultados-grid">
                  {resultados.map((resultado) => (
                    <article
                      key={`${resultado.categoria}-${resultado.nome}`}
                      className="procedimentos__resultado"
                    >
                      <span>{resultado.categoria}</span>

                      <h3>{resultado.nome}</h3>

                      <p>{resultado.descricao}</p>

                      <button
                        type="button"
                        onClick={irParaTratamentos}
                      >
                        VER NOS TRATAMENTOS
                        <b>→</b>
                      </button>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="procedimentos__sem-resultados">
                  <strong>Não encontramos esse procedimento.</strong>

                  <p>
                    Tente outro termo ou converse com nossa assistente para
                    buscar uma informação específica.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="procedimentos__assistente">
          <div className="procedimentos__assistente-topo">
            <div className="procedimentos__assistente-icone">
              <span>✦</span>
            </div>

            <div>
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

          <button
            type="button"
            className="procedimentos__assistente-toggle"
            onClick={() => {
              setAssistenteAberto((aberto) => !aberto)
              setErroIA('')
            }}
          >
            {assistenteAberto ? 'FECHAR ASSISTENTE' : 'PERGUNTAR À ASSISTENTE'}
            <span>→</span>
          </button>

          {assistenteAberto && (
            <div className="procedimentos__chat">
              <label htmlFor="pergunta-assistente">
                Escreva sua dúvida
              </label>

              <div className="procedimentos__chat-input">
                <textarea
                  id="pergunta-assistente"
                  value={pergunta}
                  onChange={(event) => setPergunta(event.target.value)}
                  onKeyDown={pressionarEnter}
                  placeholder="Ex.: Quais procedimentos vocês possuem para flacidez?"
                  rows={4}
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

              <div className="procedimentos__chat-rodape">
                <small>
                  A resposta é informativa e não substitui uma avaliação
                  profissional.
                </small>

                {pergunta.trim() ? (
                  <span>ENTER PARA ENVIAR</span>
                ) : (
                  <span>DIGITE SUA DÚVIDA</span>
                )}
              </div>

              {erroIA && (
                <div className="procedimentos__erro">
                  {erroIA}
                </div>
              )}

              {resposta && (
                <div className="procedimentos__resposta">
                  <span>ESPAÇO INNOVAR</span>
                  <p>{resposta}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Procedimentos
