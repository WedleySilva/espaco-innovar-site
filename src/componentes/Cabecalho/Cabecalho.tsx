import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Cabecalho.css'
import MenuLateral from '../MenuLateral/MenuLateral'

function Cabecalho() {
  const [rolando, setRolando] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setRolando(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setMenuAberto(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const agendarAvaliacao = () => {
    const mensagem = encodeURIComponent(
      'Olá, eu gostaria de agendar uma avaliação!'
    )

    window.open(
      `https://wa.me/5547997607747?text=${mensagem}`,
      '_blank'
    )
  }

  return (
    <>
      <motion.header
        className={`cabecalho ${rolando ? 'cabecalho--rolando' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="cabecalho__container">
          <motion.a
            href="#inicio"
            className="cabecalho__logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setMenuAberto(false)}
          >
            <img
              src="https://res.cloudinary.com/drasiz1tf/image/upload/v1788713283/espa%C3%A7o-innovar/icon/logo-innovar-png.png"
              alt="Espaço Innovar"
              className="cabecalho__logo-icone"
            />

            <div className="cabecalho__logo-texto">
              <span>ESPAÇO</span>
              <span>INNOVAR</span>

              <div className="cabecalho__logo-subtitulo">
                <span></span>
                ESTÉTICA AVANÇADA
              </div>
            </div>
          </motion.a>

          <motion.nav
            className="cabecalho__navegacao"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#inicio">INÍCIO</a>
            <a href="#tratamentos">TRATAMENTOS</a>
            <a href="#clinica">A CLÍNICA</a>
            <a href="#resultados">RESULTADOS</a>
            <a href="#contato">CONTATO</a>
          </motion.nav>

          <motion.button
            type="button"
            className="cabecalho__botao"
            onClick={agendarAvaliacao}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            AGENDAR AVALIAÇÃO
          </motion.button>

          <motion.button
            type="button"
            className="cabecalho__menu"
            onClick={() => setMenuAberto((estado) => !estado)}
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuAberto}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4 7H20" />
              <path d="M4 12H20" />
              <path d="M4 17H20" />
            </svg>
          </motion.button>
        </div>
      </motion.header>

      <MenuLateral
        aberto={menuAberto}
        onFechar={() => setMenuAberto(false)}
        onAgendar={agendarAvaliacao}
      />
    </>
  )
}

export default Cabecalho