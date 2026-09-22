import { motion } from 'framer-motion'
import './Avaliacao.css'

function Avaliacao() {
  const agendarAvaliacao = () => {
    const mensagem = encodeURIComponent(
      'Olá, eu gostaria de agendar uma avaliação!'
    )

    window.open(
      `https://wa.me/5547997607747?text=${mensagem}`,
      '_blank'
    )
  }

  const etapas = [
    {
      numero: '01',
      titulo: 'Anamnese detalhada e análise de pele',
    },
    {
      numero: '02',
      titulo: 'Plano de tratamento individualizado',
    },
    {
      numero: '03',
      titulo: 'Acompanhamento de resultados',
    },
  ]

  return (
    <section className="avaliacao">
      <div className="avaliacao__textura" />
      <div className="avaliacao__brilho avaliacao__brilho--superior" />
      <div className="avaliacao__brilho avaliacao__brilho--inferior" />

      <div className="avaliacao__circulo avaliacao__circulo--inferior" />
      <div className="avaliacao__circulo avaliacao__circulo--superior" />

      <motion.div
        className="container avaliacao__container"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.14,
            },
          },
        }}
      >
        <motion.div
          className="avaliacao__conteudo"
          variants={{
            hidden: {
              opacity: 0,
              x: -35,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          <motion.span
            className="avaliacao__eyebrow"
            variants={{
              hidden: {
                opacity: 0,
                y: 15,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                },
              },
            }}
          >
            <i />
            AVALIAÇÃO PERSONALIZADA
          </motion.span>

          <h2 className="avaliacao__titulo">
            Seu tratamento começa por
            <br />
            <em>ouvir você</em>
          </h2>

          <p className="avaliacao__descricao">
            Antes de qualquer procedimento, realizamos uma avaliação
            completa da pele, do corpo e dos seus objetivos. É assim
            que construímos protocolos seguros, eficazes e feitos sob
            medida.
          </p>

          <motion.button
            type="button"
            className="avaliacao__botao"
            onClick={agendarAvaliacao}
            whileHover={{
              y: -4,
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
              ease: 'easeOut',
            }}
          >
            <span className="avaliacao__botao-texto">
              QUERO MINHA AVALIAÇÃO
            </span>

            <span className="avaliacao__botao-seta">
              →
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          className="avaliacao__etapas"
          variants={{
            hidden: {},
            visible: {},
          }}
        >
          {etapas.map((etapa, index) => (
            <motion.div
              key={etapa.numero}
              className="avaliacao__etapa"
              variants={{
                hidden: {
                  opacity: 0,
                  x: 35,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                y: -4,
                transition: {
                  duration: 0.28,
                  ease: 'easeOut',
                },
              }}
            >
              <div className="avaliacao__numero">
                {etapa.numero}
              </div>

              <div className="avaliacao__etapa-conteudo">
                <span className="avaliacao__etapa-linha" />

                <span className="avaliacao__etapa-titulo">
                  {etapa.titulo}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Avaliacao