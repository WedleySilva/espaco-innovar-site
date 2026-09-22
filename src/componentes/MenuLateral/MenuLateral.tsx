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
            <span>ESPAÇO</span>
            <span>INNOVAR</span>
            <small>ESTÉTICA AVANÇADA</small>
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
            INÍCIO
          </a>

          <a href="#tratamentos" onClick={onFechar}>
            TRATAMENTOS
          </a>

          <a href="#clinica" onClick={onFechar}>
            A CLÍNICA
          </a>

          <a href="#resultados" onClick={onFechar}>
            RESULTADOS
          </a>

          <a href="#contato" onClick={onFechar}>
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
          AGENDAR AVALIAÇÃO
        </button>
      </aside>
    </>
  )
}

export default MenuLateral