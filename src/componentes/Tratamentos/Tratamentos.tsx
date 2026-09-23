import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Tratamentos.css'

export type Procedimento = {
  nome: string
  descricao: string
}

export type Tratamento = {
  categoria: string
  titulo: string
  descricao: string
  imagem: string
  procedimentos: Procedimento[]
}

export const tratamentos: Tratamento[] = [
  {
    categoria: 'FACIAL',
    titulo: 'Cuidados faciais',
    descricao:
      'Protocolos personalizados para rejuvenescimento, hidratação, harmonia e renovação da pele.',
    imagem:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85',
    procedimentos: [
      {
        nome: 'Toxina botulínica (Botox)',
        descricao:
          'Suaviza rugas de expressão e pode ajudar a prevenir novas linhas, mantendo um aspecto natural.',
      },
      {
        nome: 'Preenchimento labial',
        descricao:
          'Realça o contorno, proporciona volume e melhora a hidratação dos lábios.',
      },
      {
        nome: 'Preenchimento facial',
        descricao:
          'Reposição de volume para harmonizar contornos e suavizar sulcos.',
      },
      {
        nome: 'Skinbooster',
        descricao:
          'Hidratação profunda que contribui para melhorar viço, elasticidade e textura da pele.',
      },
      {
        nome: 'Bioestimulador de colágeno',
        descricao:
          'Estimula a produção natural de colágeno, contribuindo para firmeza e rejuvenescimento.',
      },
      {
        nome: 'Fios de PDO',
        descricao:
          'Procedimento que pode promover efeito lifting e estimular a produção de colágeno.',
      },
      {
        nome: 'Microagulhamento com ativos',
        descricao:
          'Estimula a renovação da pele e potencializa a absorção de ativos.',
      },
      {
        nome: 'Subcisão para acne',
        descricao:
          'Técnica utilizada para melhorar cicatrizes de acne por meio da liberação de fibroses.',
      },
      {
        nome: 'Limpeza de pele Premium',
        descricao:
          'Higienização profunda com etapas completas para remover impurezas, controlar a oleosidade, hidratar e revitalizar a pele.',
      },
      {
        nome: 'Limpeza de pele simples',
        descricao:
          'Remove impurezas, células mortas e cravos superficiais, deixando a pele limpa e saudável.',
      },
      {
        nome: 'Peeling de diamante',
        descricao:
          'Esfoliação mecânica que auxilia na renovação da pele, textura e aparência de manchas.',
      },
      {
        nome: 'Peeling químico',
        descricao:
          'Aplicação de ácidos específicos para promover renovação celular, conforme avaliação profissional.',
      },
    ],
  },
  {
    categoria: 'CORPORAL',
    titulo: 'Protocolos corporais',
    descricao:
      'Tratamentos voltados ao bem-estar, contorno corporal, circulação, celulite e cuidados com a pele.',
    imagem:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=85',
    procedimentos: [
      {
        nome: 'Subcisão de celulites',
        descricao:
          'Técnica que libera travas de fibrose, contribuindo para reduzir o aspecto da celulite.',
      },
      {
        nome: 'Tratamento para estrias',
        descricao:
          'Estimula a regeneração da pele, buscando melhorar a textura e a aparência das estrias.',
      },
      {
        nome: 'Massagem terapêutica com ventosaterapia',
        descricao:
          'Técnica voltada ao alívio de dores musculares, redução de tensões e melhora da circulação.',
      },
      {
        nome: 'Massagem relaxante',
        descricao:
          'Promove relaxamento profundo, redução do estresse e sensação de bem-estar.',
      },
      {
        nome: 'Massagem modeladora com pantalas',
        descricao:
          'Auxilia na redução de medidas, melhora do contorno corporal e estimula a circulação.',
      },
      {
        nome: 'Drenagem linfática',
        descricao:
          'Técnica que auxilia na redução do inchaço, eliminação de líquidos retidos e circulação linfática.',
      },
      {
        nome: 'Manta térmica detox',
        descricao:
          'Favorece a transpiração e pode complementar protocolos voltados à redução de retenção de líquidos.',
      },
      {
        nome: 'Protocolos para redução de medidas e emagrecimento',
        descricao:
          'Tratamentos personalizados que auxiliam na diminuição de medidas, gordura localizada e melhora do contorno corporal, associados a hábitos saudáveis.',
      },
    ],
  },
  {
    categoria: 'SUPLEMENTAÇÕES',
    titulo: 'Suplementações injetáveis',
    descricao:
      'Protocolos individualizados definidos conforme avaliação e objetivos de cada paciente.',
    imagem:
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=85',
    procedimentos: [
      {
        nome: 'Acelerador metabólico',
        descricao:
          'Protocolo de suporte voltado à otimização do metabolismo e disposição, conforme avaliação profissional.',
      },
      {
        nome: 'Ganho de massa magra',
        descricao:
          'Protocolo de suporte para favorecer o desenvolvimento muscular, aliado à alimentação e exercícios.',
      },
      {
        nome: 'Aumento da libido',
        descricao:
          'Protocolo voltado ao equilíbrio e bem-estar, podendo contribuir para melhora da libido.',
      },
      {
        nome: 'Redução de celulite',
        descricao:
          'Protocolo voltado à melhora da circulação e da aparência da pele.',
      },
      {
        nome: 'Auxílio no emagrecimento',
        descricao:
          'Protocolo que pode contribuir para o controle de peso quando associado a hábitos saudáveis.',
      },
      {
        nome: "BCAA's",
        descricao:
          'Aminoácidos utilizados como suporte à recuperação muscular e ao desempenho físico.',
      },
      {
        nome: 'Complexo B',
        descricao:
          'Suporte relacionado à produção de energia, disposição, metabolismo e funcionamento do sistema nervoso.',
      },
      {
        nome: 'Zinco',
        descricao:
          'Nutriente relacionado à cicatrização, imunidade e manutenção da saúde.',
      },
      {
        nome: 'Picolinato de cromo',
        descricao:
          'Ativo utilizado em protocolos individualizados relacionados ao metabolismo, sempre conforme avaliação profissional.',
      },
      {
        nome: 'Procaína benzoica com cafeína',
        descricao:
          'Ativo utilizado em protocolos personalizados conforme objetivos e avaliação profissional.',
      },
      {
        nome: 'Aminoácidos',
        descricao:
          'Podem contribuir para produção de colágeno, recuperação tecidual e manutenção da massa muscular.',
      },
      {
        nome: 'Curcumina',
        descricao:
          'Possui ação antioxidante e anti-inflamatória, contribuindo para o bem-estar do organismo.',
      },
      {
        nome: 'Ativos para flacidez',
        descricao:
          'Protocolos voltados ao estímulo de colágeno e elastina, buscando melhorar firmeza e qualidade da pele.',
      },
    ],
  },
  {
    categoria: 'ESTÉTICA AVANÇADA',
    titulo: 'Tecnologia e procedimentos',
    descricao:
      'Tecnologias e procedimentos especializados para complementar protocolos de cuidado e estética.',
    imagem:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85',
    procedimentos: [
      {
        nome: 'Remoção de verrugas com jato de plasma',
        descricao:
          'Procedimento minimamente invasivo que utiliza jato de plasma. A lesão deve ser avaliada previamente para confirmar sua compatibilidade.',
      },
      {
        nome: 'PEIM — Aplicação de Microvasos',
        descricao:
          'Procedimento destinado ao tratamento de microvasos aparentes por meio da aplicação de solução específica.',
      },
      {
        nome: 'Depilação a laser de diodo',
        descricao:
          'Tecnologia que atua diretamente no folículo do pelo, promovendo redução progressiva dos pelos.',
      },
      {
        nome: 'Radiofrequência',
        descricao:
          'Tecnologia utilizada em protocolos estéticos personalizados conforme avaliação profissional.',
      },
      {
        nome: 'Ultrassom',
        descricao:
          'Tecnologia que pode ser integrada a protocolos corporais e estéticos personalizados.',
      },
      {
        nome: 'Laser',
        descricao:
          'Tecnologia aplicada em protocolos específicos conforme indicação e avaliação profissional.',
      },
      {
        nome: 'Criofrequência',
        descricao:
          'Tecnologia utilizada em protocolos estéticos personalizados para diferentes objetivos corporais e faciais.',
      },
    ],
  },
]

function Tratamentos() {
  const [tratamentoSelecionado, setTratamentoSelecionado] =
    useState<Tratamento | null>(null)
  const [precisaNavegacao, setPrecisaNavegacao] = useState(false)

  const faixaRef = useRef<HTMLDivElement>(null)
  const arrastando = useRef(false)
  const inicioX = useRef(0)
  const inicioY = useRef(0)
  const scrollInicial = useRef(0)
  const direcaoArraste = useRef<'horizontal' | 'vertical' | null>(null)
  const houveMovimentoHorizontal = useRef(false)
  const pointerId = useRef<number | null>(null)

  const MOVIMENTO_THRESHOLD = 8

  useEffect(() => {
    const faixa = faixaRef.current

    if (!faixa) return

    const verificarOverflow = () => {
      setPrecisaNavegacao(faixa.scrollWidth > faixa.clientWidth + 1)
    }

    verificarOverflow()

    const observer = new ResizeObserver(verificarOverflow)
    observer.observe(faixa)

    window.addEventListener('resize', verificarOverflow)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', verificarOverflow)
    }
  }, [])

  useEffect(() => {
    const handleAbrirModal = (event: Event) => {
      const customEvent = event as CustomEvent
      const categoria = customEvent.detail

      const tratamentoEncontrado = tratamentos.find(
        (tratamento) => tratamento.categoria === categoria
      )

      if (tratamentoEncontrado) {
        setTratamentoSelecionado(tratamentoEncontrado)
      }
    }

    window.addEventListener('abrirTratamentoModal', handleAbrirModal)

    return () => {
      window.removeEventListener('abrirTratamentoModal', handleAbrirModal)
    }
  }, [])

  const navegar = (direcao: 'esquerda' | 'direita') => {
    if (!faixaRef.current) return

    const distancia = faixaRef.current.clientWidth * 0.75

    faixaRef.current.scrollBy({
      left: direcao === 'direita' ? distancia : -distancia,
      behavior: 'smooth',
    })
  }

  const iniciarArraste = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!faixaRef.current) return

    inicioX.current = event.clientX
    inicioY.current = event.clientY
    scrollInicial.current = faixaRef.current.scrollLeft

    arrastando.current = false
    houveMovimentoHorizontal.current = false
    direcaoArraste.current = null
    pointerId.current = event.pointerId
  }

  const moverArraste = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!faixaRef.current) return
    if (pointerId.current !== event.pointerId) return

    const deltaX = event.clientX - inicioX.current
    const deltaY = event.clientY - inicioY.current

    if (!direcaoArraste.current) {
      const distanciaX = Math.abs(deltaX)
      const distanciaY = Math.abs(deltaY)

      if (
        distanciaX < MOVIMENTO_THRESHOLD &&
        distanciaY < MOVIMENTO_THRESHOLD
      ) {
        return
      }

      if (distanciaY > distanciaX) {
        direcaoArraste.current = 'vertical'
        return
      }

      direcaoArraste.current = 'horizontal'
    }

    if (direcaoArraste.current !== 'horizontal') return

    if (!arrastando.current) {
      arrastando.current = true
      houveMovimentoHorizontal.current = true
      faixaRef.current.classList.add('tratamentos__faixa--arrastando')
    }

    event.preventDefault()

    faixaRef.current.scrollLeft = scrollInicial.current - deltaX
  }

  const finalizarArraste = (
    event?: React.PointerEvent<HTMLDivElement>
  ) => {
    if (!faixaRef.current) return

    if (
      event &&
      pointerId.current !== null &&
      event.pointerId !== pointerId.current
    ) {
      return
    }

    faixaRef.current.classList.remove('tratamentos__faixa--arrastando')
    pointerId.current = null

    setTimeout(() => {
      arrastando.current = false
      houveMovimentoHorizontal.current = false
      direcaoArraste.current = null
    }, 80)
  }

  const abrirTratamento = (tratamento: Tratamento) => {
    if (arrastando.current || houveMovimentoHorizontal.current) return

    setTratamentoSelecionado(tratamento)
  }

  const fecharTratamento = () => {
    setTratamentoSelecionado(null)
  }

  return (
    <>
      <section id="tratamentos" className="tratamentos">
        <div className="tratamentos__fundo" />

        <div className="container tratamentos__container">
          <div className="tratamentos__cabecalho">
            <motion.div
              className="tratamentos__cabecalho-texto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6 }}
            >
              <span className="tratamentos__eyebrow">
                <i />
                NOSSOS TRATAMENTOS
              </span>

              <h2 className="tratamentos__titulo">
                Protocolos pensados para <em>cada pele</em>
              </h2>

              <p className="tratamentos__descricao">
                Da estética facial à massoterapia, cada tratamento começa com
                uma avaliação criteriosa para desenhar o caminho ideal até o seu
                resultado.
              </p>
            </motion.div>

            {precisaNavegacao && (
              <motion.div
                className="tratamentos__navegacao"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <button
                  type="button"
                  className="tratamentos__nav-btn"
                  onClick={() => navegar('esquerda')}
                  aria-label="Anterior"
                >
                  ←
                </button>

                <button
                  type="button"
                  className="tratamentos__nav-btn"
                  onClick={() => navegar('direita')}
                  aria-label="Próximo"
                >
                  →
                </button>
              </motion.div>
            )}
          </div>

          <motion.div
            className="tratamentos__area"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              ref={faixaRef}
              className="tratamentos__faixa"
              onPointerDown={iniciarArraste}
              onPointerMove={moverArraste}
              onPointerUp={finalizarArraste}
              onPointerCancel={finalizarArraste}
              onPointerLeave={finalizarArraste}
            >
              {tratamentos.map((tratamento, index) => (
                <motion.article
                  key={tratamento.categoria}
                  className="tratamentos__card"
                  onClick={() => abrirTratamento(tratamento)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <div className="tratamentos__imagem-wrapper">
                    <img
                      src={tratamento.imagem}
                      alt={tratamento.titulo}
                      className="tratamentos__imagem"
                      draggable="false"
                    />

                    <div className="tratamentos__imagem-overlay" />

                    <span className="tratamentos__categoria">
                      {tratamento.categoria}
                    </span>
                  </div>

                  <div className="tratamentos__card-conteudo">
                    <h3>{tratamento.titulo}</h3>

                    <div className="tratamentos__card-linha" />

                    <p
                      onPointerDown={(event) => event.stopPropagation()}
                      onMouseDown={(event) => event.stopPropagation()}
                      onTouchStart={(event) => event.stopPropagation()}
                    >
                      {tratamento.descricao}
                    </p>

                    <div className="tratamentos__card-final">
                      <span>
                        {tratamento.procedimentos.length} procedimentos
                      </span>

                      <span className="tratamentos__ver">
                        VER TODOS
                        <b>→</b>
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {tratamentoSelecionado && (
          <motion.div
            className="tratamentos__modal-overlay"
            onClick={fecharTratamento}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="tratamentos__modal"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.96 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <button
                type="button"
                className="tratamentos__modal-fechar"
                onClick={fecharTratamento}
                aria-label="Fechar"
              >
                <span />
                <span />
              </button>

              <div className="tratamentos__modal-imagem">
                <img
                  src={tratamentoSelecionado.imagem}
                  alt={tratamentoSelecionado.titulo}
                />
              </div>

              <div className="tratamentos__modal-conteudo">
                <span className="tratamentos__modal-categoria">
                  {tratamentoSelecionado.categoria}
                </span>

                <h2>{tratamentoSelecionado.titulo}</h2>

                <div className="tratamentos__modal-linha" />

                <p className="tratamentos__modal-descricao">
                  {tratamentoSelecionado.descricao}
                </p>

                <motion.div
                  className="tratamentos__procedimentos"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                    hidden: {},
                  }}
                >
                  {tratamentoSelecionado.procedimentos.map(
                    (procedimento) => (
                      <motion.div
                        key={procedimento.nome}
                        className="tratamentos__procedimento"
                        variants={{
                          hidden: {
                            opacity: 0,
                            y: 20,
                          },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.5,
                              ease: [0.25, 0.1, 0.25, 1],
                            },
                          },
                        }}
                      >
                        <div className="tratamentos__procedimento-ponto" />

                        <div>
                          <h3>{procedimento.nome}</h3>
                          <p>{procedimento.descricao}</p>
                        </div>
                      </motion.div>
                    )
                  )}
                </motion.div>

                <div className="tratamentos__modal-observacao">
                  Os procedimentos são indicados após avaliação individualizada
                  e podem variar conforme as necessidades de cada pessoa.
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Tratamentos
