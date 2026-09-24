import { useEffect } from 'react'
import './MenuLateral.css'

interface MenuLateralProps {
  aberto: boolean
  onFechar: () => void
  onAgendar: () => void
}

function MenuLateral({
  aberto,
  onFechar,
  onAgendar,
}: MenuLateralProps) {
  useEffect(() => {
    const overflowAtual = document.body.style.overflow

    if (aberto) {
      document.body.style.overflow = 'hidden'
    }

    const handleTecla = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onFechar()
      }
    }

    if (aberto) {
      window.addEventListener('keydown', handleTecla)
    }

    return () => {
      document.body.style.overflow = overflowAtual
      window.removeEventListener('keydown', handleTecla)
    }
  }, [aberto, onFechar])

  return (
    <>
      <div
        className={`menu-lateral__overlay ${
          aberto ? 'menu-lateral__overlay--aberto' : ''
        }`}
        onClick={onFechar}
      />

      <aside
        className={`menu-lateral ${
          aberto ? 'menu-lateral--aberto' : ''
        }`}
        aria-hidden={!aberto}
      >
        <div className="menu-lateral__topo">
          <div className="menu-lateral__marca">
            <span>CLÍNICA</span>
            <span>INNOVAR</span>

            <div className="menu-lateral__subtitulo">
              <span />
              <div>
                <small>HARMONIZAÇÃO FACIAL</small>
                <small>ESTÉTICA AVANÇADA</small>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="menu-lateral__fechar"
            onClick={onFechar}
            aria-label="Fechar menu"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 5L19 19" />
              <path d="M19 5L5 19" />
            </svg>
          </button>
        </div>

        <nav className="menu-lateral__navegacao">
          <a href="#inicio" onClick={onFechar}>
            <span>01</span>
            INÍCIO
          </a>

          <a href="#tratamentos" onClick={onFechar}>
            <span>02</span>
            TRATAMENTOS
          </a>

          <a href="#clinica" onClick={onFechar}>
            <span>03</span>
            A CLÍNICA
          </a>

          <a href="#resultados" onClick={onFechar}>
            <span>04</span>
            RESULTADOS
          </a>

          <a href="#contato" onClick={onFechar}>
            <span>05</span>
            CONTATO
          </a>
        </nav>

        <button
          type="button"
          className="menu-lateral__botao"
          onClick={() => {
            onFechar()
            onAgendar()
          }}
        >
          <span>AGENDAR AVALIAÇÃO</span>
          <i>↗</i>
        </button>
      </aside>
    </>
  )
}

export default MenuLateral