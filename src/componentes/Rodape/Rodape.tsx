import { motion, type Easing } from 'framer-motion'
import './Rodape.css'

const ease: Easing = [0.22, 1, 0.36, 1]

const footerContainer = {
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

const footerItem = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
}

function Rodape() {
  const anoAtual = new Date().getFullYear()

  const voltarAoInicio = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="rodape">
      <div className="rodape__principal">
        <motion.div
          className="container rodape__container"
          variants={footerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          <motion.div
            className="rodape__marca"
            variants={footerItem}
          >
            <motion.a
              href="#inicio"
              className="rodape__logo"
              onClick={voltarAoInicio}
              whileHover={{
                y: -2,
              }}
              transition={{
                duration: 0.3,
                ease,
              }}
            >
              <motion.img
                src="https://res.cloudinary.com/drasiz1tf/image/upload/v1788713283/espa%C3%A7o-innovar/icon/logo-innovar-png.png"
                alt="Clínica Innovar"
                className="rodape__logo-icone"
                whileHover={{
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.4,
                  ease,
                }}
              />

              <div className="rodape__logo-texto">
                <span>CLÍNICA</span>
                <span>INNOVAR</span>

                <div className="rodape__logo-subtitulo">
                  <span />
                  <div>
                    <small>HARMONIZAÇÃO FACIAL</small>
                    <small>ESTÉTICA AVANÇADA</small>
                  </div>
                </div>
              </div>
            </motion.a>

            <p className="rodape__descricao">
              Cuidado individualizado e
              tratamentos pensados para valorizar a beleza de
              cada pessoa em Garuva — SC.
            </p>
          </motion.div>

          <motion.div
            className="rodape__navegacao"
            variants={footerItem}
          >
            <h3>NAVEGAÇÃO</h3>

            <nav>
              <a href="#inicio">Início</a>
              <a href="#tratamentos">Tratamentos</a>
              <a href="#clinica">A Clínica</a>
              <a href="#resultados">Resultados</a>
              <a href="#contato">Contato</a>
            </nav>
          </motion.div>

          <motion.div
            className="rodape__contato"
            variants={footerItem}
          >
            <h3>CONTATO</h3>

            <div className="rodape__contato-lista">
              <a
                href="https://wa.me/5547997607747"
                target="_blank"
                rel="noreferrer"
              >
                (47) 99760-7747
              </a>

              <p>Garuva — Santa Catarina</p>

              <a
                href="https://instagram.com/clinica_innovar"
                target="_blank"
                rel="noreferrer"
              >
                @clinica_innovar
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="rodape__inferior">
        <div className="container rodape__inferior-container">
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
          >
            © {anoAtual} - CLÍNICA INNOVAR - TODOS OS DIREITOS
            RESERVADOS
          </motion.p>

          <motion.span
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease,
            }}
          >
            <p>
              <a
                href="https://github.com/WedleySilva"
                target="_blank"
                rel="noreferrer"
              >
                WEDLEY S. SCHMOELLER
              </a>
              {' - '}
              <a
                href="https://www.linkedin.com/in/wedley-silva-schmoeller-809104247"
                target="_blank"
                rel="noreferrer"
              >
                ENGENHEIRO DE SOFTWARE
              </a>
            </p>
          </motion.span>
        </div>
      </div>
    </footer>
  )
}

export default Rodape