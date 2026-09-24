import { motion } from 'framer-motion'
import './Clinica.css'

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const revealRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const revealUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function Clinica() {
  return (
    <section id="clinica" className="clinica">
      <div className="clinica__fundo" />

      <div className="container clinica__container">
        <motion.div
          className="clinica__visual"
          variants={revealLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          <motion.div
            className="clinica__moldura"
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <motion.div
            className="clinica__imagem-principal"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              src="https://res.cloudinary.com/drasiz1tf/image/upload/v1790252273/espa%C3%A7o-innovar/clinica/clinica-innovar-sala.png"
              alt="Ambiente da Clínica Innovar"
            />

            <div className="clinica__imagem-overlay" />

            <div className="clinica__imagem-legenda">
              <span>Clínica Innovar</span>
            </div>
          </motion.div>

          <motion.div
            className="clinica__imagem-secundaria"
            initial={{ opacity: 0, y: 35, x: 20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              src="https://res.cloudinary.com/drasiz1tf/image/upload/v1789154012/espa%C3%A7o-innovar/angela/angela-espa%C3%A7o-innovar.jpg"
              alt="Dra. Angela"
            />

            <div className="clinica__imagem-secundaria-overlay" />
          </motion.div>

          <motion.div
            className="clinica__profissional"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="clinica__profissional-conteudo">
              <span className="clinica__profissional-label">
                Responsável técnica
              </span>

              <strong>Dra. Angela</strong>

              <span className="clinica__profissional-registro">
                CRBM 011613
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="clinica__conteudo"
          variants={revealRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          <motion.div className="clinica__eyebrow" variants={revealUp}>
            <i />
            SOBRE A CLÍNICA
          </motion.div>

          <motion.h2 className="clinica__titulo" variants={revealUp}>
            Onde cuidado,
            <em> técnica e acolhimento</em> se encontram.
          </motion.h2>

          <motion.div className="clinica__linha" variants={revealUp} />

          <motion.div className="clinica__textos" variants={revealUp}>
            <p>
              A Clínica Innovar nasceu com o propósito de proporcionar uma
              experiência diferente em estética e bem-estar. Aqui, cada
              detalhe foi pensado para que você se sinta acolhido desde o
              primeiro contato.
            </p>

            <p>
              Unimos conhecimento técnico, tecnologia e um olhar cuidadoso
              para oferecer tratamentos personalizados, respeitando a
              individualidade e os objetivos de cada pessoa.
            </p>
          </motion.div>

          <motion.div className="clinica__frase" variants={revealUp}>
            <span className="clinica__frase-marca">“</span>

            <p>
              Cuidar da sua beleza também é uma forma de cuidar de você.
            </p>
          </motion.div>

          <motion.div className="clinica__diferenciais">
            <motion.article
              className="clinica__diferencial"
              variants={revealUp}
            >
              <span className="clinica__diferencial-numero">01</span>

              <div>
                <h3>Atendimento personalizado</h3>
                <p>
                  Cada tratamento é pensado de acordo com suas necessidades,
                  características e expectativas.
                </p>
              </div>
            </motion.article>

            <motion.article
              className="clinica__diferencial"
              variants={revealUp}
            >
              <span className="clinica__diferencial-numero">02</span>

              <div>
                <h3>Conhecimento e precisão</h3>
                <p>
                  Técnica, experiência e atenção aos detalhes para resultados
                  seguros e naturais.
                </p>
              </div>
            </motion.article>

            <motion.article
              className="clinica__diferencial"
              variants={revealUp}
            >
              <span className="clinica__diferencial-numero">03</span>

              <div>
                <h3>Experiência acolhedora</h3>
                <p>
                  Um espaço tranquilo e sofisticado para transformar seu
                  momento de cuidado em uma experiência especial.
                </p>
              </div>
            </motion.article>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Clinica

