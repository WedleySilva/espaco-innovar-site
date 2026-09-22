import { motion } from 'framer-motion'
import './Inicio.css'

function Inicio() {
  const agendarAvaliacao = () => {
    const mensagem = encodeURIComponent('Olá, eu gostaria de agendar uma avaliação!')
    window.open(
      `https://wa.me/5547997607747?text=${mensagem}`,  
      '_blank'
    )
  }

  return (
    <section id="inicio" className="inicio">
      <div className="inicio__fundo"></div>

      <div className="container inicio__container">
        <div className="inicio__conteudo">
          <motion.span 
            className="inicio__localizacao"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            GARUVA · SANTA CATARINA
          </motion.span>

          <motion.h1 
            className="inicio__titulo"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A beleza que nasce
            <br />
            do <em>cuidado</em> verdadeiro
          </motion.h1>

          <motion.div 
            className="inicio__linha"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ originX: 0 }} 
          ></motion.div>

          <motion.p 
            className="inicio__descricao"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            No Espaço Innovar — Estética Avançada, cada protocolo é
            desenhado para você. Um momento de pausa, técnica apurada
            e um acolhimento que transforma o cuidado com a pele e o
            corpo em um ritual.
          </motion.p>

          <motion.div 
            className="inicio__acoes"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <button
              className="inicio__botao inicio__botao--principal"
              onClick={agendarAvaliacao}
            >
              AGENDAR AVALIAÇÃO
              <span>→</span>
            </button>

            <a
              href="#tratamentos"
              className="inicio__botao inicio__botao--secundario"
            >
              VER TRATAMENTOS
              <span>→</span>
            </a>
          </motion.div>

          <motion.div 
            className="inicio__indicadores"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.72, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="inicio__indicador">
              <strong>+8</strong>
              <span>ANOS DE CUIDADO</span>
            </div>

            <div className="inicio__indicador">
              <strong>+40</strong>
              <span>PROTOCOLOS</span>
            </div>

            <div className="inicio__indicador">
              <strong>100%</strong>
              <span>INDIVIDUALIZADO</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="inicio__visual"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inicio__moldura inicio__moldura--superior"></div>

          <div className="inicio__imagem-wrapper">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=90"
              alt="Tratamento de estética facial"
              className="inicio__imagem"
            />
          </div>

          <div className="inicio__moldura inicio__moldura--inferior"></div>

          <motion.div 
            className="inicio__selo"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.1, type: "spring", bounce: 0.4 }}
          >
            <strong>Estética avançada</strong>
            <span>COM PROPÓSITO</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="inicio__transicao"></div>
    </section>
  )
}

export default Inicio