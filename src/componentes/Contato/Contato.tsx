import { motion, type Easing } from 'framer-motion'
import './Contato.css'

const ease: Easing = [0.22, 1, 0.36, 1]

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

const revealUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease,
    },
  },
}

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
}

const revealRight = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
}

function Contato() {
  const whatsapp = () => {
    window.open(
      'https://wa.me/5547997607747',
      '_blank'
    )
  }

  return (
    <section id="contato" className="contato">
      <div className="contato__fundo"></div>

      <motion.div
        className="container contato__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <motion.header
          className="contato__cabecalho"
          variants={revealUp}
        >
          <span className="contato__eyebrow">
            <i />
            CONTATO
          </span>

          <h2 className="contato__titulo">
            Estamos em <em>Garuva</em>, Santa Catarina
          </h2>
        </motion.header>

        <div className="contato__grid">
          <motion.div
            className="contato__links"
            variants={revealLeft}
          >
            <motion.button
              type="button"
              className="contato__card"
              onClick={whatsapp}
              whileHover={{
                y: -5,
              }}
              whileTap={{
                scale: 0.985,
              }}
              transition={{
                duration: 0.3,
                ease,
              }}
            >
              <div>
                <span className="contato__card-label">
                  WHATSAPP
                </span>

                <strong>
                  (47) 99760-7747
                </strong>
              </div>

              <span className="contato__seta">
                ↗
              </span>
            </motion.button>

            <motion.a
              href="https://www.facebook.com/espacoinnovarangela/?locale=pt_BR"
              target="_blank"
              rel="noreferrer"
              className="contato__card"
              whileHover={{
                y: -5,
              }}
              whileTap={{
                scale: 0.985,
              }}
              transition={{
                duration: 0.3,
                ease,
              }}
            >
              <div>
                <span className="contato__card-label">
                  FACEBOOK
                </span>

                <strong>
                  Clínica Innovar
                </strong>
              </div>

              <span className="contato__seta">
                ↗
              </span>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/clinica_innovar/"
              target="_blank"
              rel="noreferrer"
              className="contato__card"
              whileHover={{
                y: -5,
              }}
              whileTap={{
                scale: 0.985,
              }}
              transition={{
                duration: 0.3,
                ease,
              }}
            >
              <div>
                <span className="contato__card-label">
                  INSTAGRAM
                </span>

                <strong>
                  @clinica_innovar
                </strong>
              </div>

              <span className="contato__seta">
                ↗
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            className="contato__informacoes"
            variants={revealRight}
          >
            <div className="contato__bloco">
              <h3>Endereço</h3>

              <div className="contato__linha"></div>

              <p>
                R. Carijós, 285
                <br />
                Centro · Garuva — Santa Catarina
              </p>

              <span>
                Atendimento com agendamento prévio
              </span>
            </div>

            <div className="contato__bloco">
              <h3>Horário</h3>

              <div className="contato__linha"></div>

              <div className="contato__horarios">
                <div>
                  <span>Segunda a sexta</span>
                  <strong>09h — 19h</strong>
                </div>

                <div>
                  <span>Sábado</span>
                  <strong>09h — 14h</strong>
                </div>

                <div>
                  <span>Domingo</span>
                  <strong>Fechado</strong>
                </div>
              </div>
            </div>

            <motion.button
              type="button"
              className="contato__botao"
              onClick={whatsapp}
              whileHover={{
                y: -4,
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
                ease,
              }}
            >
              <span className="contato__botao-texto">
                AGENDAR AVALIAÇÃO
              </span>

              <span className="contato__botao-icone">
                ↗
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contato