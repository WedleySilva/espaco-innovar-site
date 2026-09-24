import { useEffect, useState } from 'react'
import { motion, type Easing } from 'framer-motion'
import './Cabecalho.css'
import MenuLateral from '../MenuLateral/MenuLateral'

const ease: Easing = [0.22, 1, 0.36, 1]

const navItems = [
  { label: 'INÍCIO', href: '#inicio' },
  { label: 'TRATAMENTOS', href: '#tratamentos' },
  { label: 'A CLÍNICA', href: '#clinica' },
  { label: 'RESULTADOS', href: '#resultados' },
  { label: 'CONTATO', href: '#contato' },
]

function Cabecalho() {
  const [rolando, setRolando] = useState(false)
  const [cabecalhoOculto, setCabecalhoOculto] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)

useEffect(() => {
  let ultimaPosicao = window.scrollY

  const handleScroll = () => {
    const posicaoAtual = window.scrollY

    setRolando(posicaoAtual > 20)

    if (posicaoAtual <= 20) {
      setCabecalhoOculto(false)
    } else if (posicaoAtual > ultimaPosicao) {
      setCabecalhoOculto(true)
    } else if (posicaoAtual < ultimaPosicao) {
      setCabecalhoOculto(false)
    }

    ultimaPosicao = posicaoAtual
  }

  handleScroll()

  window.addEventListener('scroll', handleScroll, { passive: true })

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (event.clientY <= 18) {
        setCabecalhoOculto(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
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

  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuAberto])

  const agendarAvaliacao = () => {
    const mensagem = encodeURIComponent(
      'Olá, eu gostaria de agendar uma avaliação!'
    )

    window.open(
      `https://wa.me/5547997607747?text=${mensagem}`,
      '_blank'
    )
  }

  const fecharMenu = () => {
    setMenuAberto(false)
  }

  return (
    <>
      <motion.header
        className={`cabecalho ${
          rolando ? 'cabecalho--rolando' : ''
        } ${cabecalhoOculto ? 'cabecalho--oculto' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: cabecalhoOculto ? '-110%' : 0,
          opacity: cabecalhoOculto ? 0 : 1,
        }}
        transition={{
          duration: 0.45,
          ease,
        }}
      >
        <div className="cabecalho__container">
          <motion.a
            href="#inicio"
            className="cabecalho__logo"
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease,
            }}
            whileHover={{
              y: -1,
            }}
            onClick={fecharMenu}
          >
            <motion.img
              src="https://res.cloudinary.com/drasiz1tf/image/upload/v1788713283/espa%C3%A7o-innovar/icon/logo-innovar-png.png"
              alt="Clínica Innovar"
              className="cabecalho__logo-icone"
              whileHover={{
                scale: 1.035,
              }}
              transition={{
                duration: 0.4,
                ease,
              }}
            />

            <div className="cabecalho__logo-texto">
              <span>CLÍNICA</span>
              <span>INNOVAR</span>

              <div className="cabecalho__logo-subtitulo">
                <span />
                <div>
                  <small>HARMONIZAÇÃO FACIAL</small>
                  <small>ESTÉTICA AVANÇADA</small>
                </div>
              </div>
            </div>
          </motion.a>

          <motion.nav
            className="cabecalho__navegacao"
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.35,
              ease,
            }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{
                  opacity: 0,
                  y: -8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.38 + index * 0.06,
                  ease,
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>

          <motion.button
            type="button"
            className="cabecalho__botao"
            onClick={agendarAvaliacao}
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.65,
              ease,
            }}
            whileHover={{
              y: -3,
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <span>AGENDAR AVALIAÇÃO</span>
            <i>↗</i>
          </motion.button>

          <motion.button
            type="button"
            className={`cabecalho__menu ${
              menuAberto ? 'cabecalho__menu--aberto' : ''
            }`}
            onClick={() => setMenuAberto((estado) => !estado)}
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuAberto}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              ease,
            }}
            whileTap={{
              scale: 0.94,
            }}
          >
            <span />
            <span />
            <span />
          </motion.button>
        </div>
      </motion.header>

      <MenuLateral
        aberto={menuAberto}
        onFechar={fecharMenu}
        onAgendar={agendarAvaliacao}
      />
    </>
  )
}

export default Cabecalho