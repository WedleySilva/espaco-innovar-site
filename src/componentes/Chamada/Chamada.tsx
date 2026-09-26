import { motion, type Easing } from 'framer-motion'
import './Chamada.css'

const ease: Easing = [0.22, 1, 0.36, 1]

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const revealUp = {
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

const revealTitle = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease,
    },
  },
}

function Chamada() {
  const agendarWhatsApp = () => {
    window.open('https://wa.me/5547997607747', '_blank')
  }

  return (
    <section className="chamada">
      <div className="chamada__luz chamada__luz--principal" />
      <div className="chamada__luz chamada__luz--secundaria" />
      <div className="chamada__textura" />
      <div className="chamada__linha chamada__linha--esquerda" />
      <div className="chamada__linha chamada__linha--direita" />

      <motion.div
        className="chamada__conteudo"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.span
          className="chamada__eyebrow"
          variants={revealUp}
        >
          <i />
          CLÍNICA INNOVAR · GARUVA — SC
          <i />
        </motion.span>

        <motion.h2
          className="chamada__titulo"
          variants={revealTitle}
        >
          <span>Sua próxima versão</span>
          <span>
            começa <em>agora</em>
          </span>
        </motion.h2>

        <motion.p
          className="chamada__descricao"
          variants={revealUp}
        >
          Agende sua avaliação e descubra o protocolo ideal para os seus
          objetivos, conduzido por quem cuida de você de verdade.
        </motion.p>

        <motion.div
          className="chamada__acoes"
          variants={revealUp}
        >
          <motion.button
            type="button"
            className="chamada__botao chamada__botao--principal"
            onClick={agendarWhatsApp}
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
            <span className="chamada__botao-texto">
              AGENDAR PELO WHATSAPP
            </span>
            <span className="chamada__botao-icone">
              {"↗\uFE0E"}
            </span>
          </motion.button>

          <motion.a
            href="#contato"
            className="chamada__botao chamada__botao--secundario"
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.3,
              ease,
            }}
          >
            <span>VER CONTATOS</span>
            <span className="chamada__botao-icone">
              {"↗\uFE0E"}
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Chamada

