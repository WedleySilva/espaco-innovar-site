import { motion, type Easing, useReducedMotion } from 'framer-motion'
import './Comentarios.css'

type Comentario = {
  nome: string
  identificacao: string
  tempo: string
  texto: string
}

const comentarios: Comentario[] = [
  {
    nome: 'Larissa Correa',
    identificacao: '1 avaliação',
    tempo: '3 anos atrás',
    texto: 'Atendimento maravilhoso! Recomendo.',
  },
  {
    nome: 'Léia Marques Duarte',
    identificacao: '1 avaliação',
    tempo: '3 anos atrás',
    texto: 'Amooo, sou muito bem atendida profissionais capacitados.',
  },
  {
    nome: 'Ruthe R. Souza',
    identificacao: '4 avaliações',
    tempo: '3 anos atrás',
    texto:
      'Tudo excelente, atendimento, o ambiente, Ângela é uma ótima pessoa e profissional, e a massagem a 4 mãos também é maravilhosa, super recomendo.',
  },
]

const ease: Easing = [0.22, 1, 0.36, 1]

const revealHeader = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
}

const revealLine = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.2,
      ease,
    },
  },
}

const cardsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.12,
    },
  },
}

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease,
    },
  },
}

const starReveal = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    y: 4,
  },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: index * 0.045,
      ease,
    },
  }),
}

function Comentarios() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="comentarios" className="comentarios">
      <div className="comentarios__fundo" aria-hidden="true" />

      <div className="container comentarios__container">
        <motion.header
          className="comentarios__cabecalho"
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={revealHeader}
        >
          <motion.span
            className="comentarios__eyebrow"
            variants={revealHeader}
          >
            <i aria-hidden="true" />
            AVALIAÇÕES
            <i aria-hidden="true" />
          </motion.span>

          <h2 className="comentarios__titulo">
            O que dizem sobre a <em>Innovar</em>
          </h2>

          <motion.span
            className="comentarios__titulo-linha"
            variants={revealLine}
            aria-hidden="true"
          />
        </motion.header>

        <motion.div
          className="comentarios__area"
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div
            className="comentarios__grid"
            variants={cardsContainer}
          >
            {comentarios.map((comentario, index) => (
              <motion.article
                key={`${comentario.nome}-${index}`}
                className="comentarios__card"
                variants={cardReveal}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -9,
                        transition: {
                          duration: 0.35,
                          ease,
                        },
                      }
                }
              >
                <div className="comentarios__estrelas" aria-label="5 estrelas">
                  {Array.from({ length: 5 }, (_, estrelaIndex) => (
                    <motion.span
                      key={estrelaIndex}
                      className="comentarios__estrela"
                      custom={estrelaIndex}
                      variants={starReveal}
                      aria-hidden="true"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                <p className="comentarios__texto">“{comentario.texto}”</p>

                <motion.hr
                  className="comentarios__divisor"
                  initial={shouldReduceMotion ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: shouldReduceMotion ? 0 : 0.25,
                    ease,
                  }}
                />

                <div className="comentarios__autor-box">
                  <span className="comentarios__nome">
                    {comentario.nome}
                  </span>

                  <span className="comentarios__info">
                    {comentario.identificacao} • {comentario.tempo}
                  </span>
                </div>

                <span className="comentarios__card-indice" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Comentarios