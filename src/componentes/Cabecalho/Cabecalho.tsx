import { useEffect, useState } from 'react'
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
    window.open(
      'https://wa.me/5547997607747',
      '_blank'
    )
  }

  return (
    <header className={`cabecalho ${rolando ? 'cabecalho--rolando' : ''}`}>
      <div className="cabecalho__container">
        <a href="#inicio" className="cabecalho__logo">
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
        </a>

        <nav className="cabecalho__navegacao">
          <a href="#inicio">INÍCIO</a>
          <a href="#tratamentos">TRATAMENTOS</a>
          <a href="#clinica">A CLÍNICA</a>
          <a href="#resultados">RESULTADOS</a>
          <a href="#contato">CONTATO</a>
        </nav>

        <button
          className="cabecalho__botao"
          onClick={agendarAvaliacao}
        >
          AGENDAR AVALIAÇÃO
        </button>

        <button className="cabecalho__menu">
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Cabecalho