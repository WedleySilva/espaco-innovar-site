import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Cabecalho.css'

function Cabecalho() {
  const [rolando, setRolando] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setRolando(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const agendarAvaliacao = () => {
    const mensagem = encodeURIComponent('Olá, eu gostaria de agendar uma avaliação!')
    window.open(
      `https://wa.me/5547997607747?text=${mensagem}`,
      '_blank'
    )
  }

  return (
    <motion.header 
      className={`cabecalho ${rolando ? 'cabecalho--rolando' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="cabecalho__container">
        <motion.a 
          href="#inicio" 
          className="cabecalho__logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
          className="cabecalho__botao"
          onClick={agendarAvaliacao}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          AGENDAR AVALIAÇÃO
        </motion.button>

        <motion.button 
          className="cabecalho__menu"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span></span>
          <span></span>
        </motion.button>
      </div>
    </motion.header>
  )
}

export default Cabecalho