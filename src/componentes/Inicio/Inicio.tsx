import './Inicio.css'

function Inicio() {
  const agendarAvaliacao = () => {
    window.open(
      'https://wa.me/5547997607747',  
      '_blank'
    )
  }

  return (
    <section id="inicio" className="inicio">
      <div className="inicio__fundo"></div>

      <div className="container inicio__container">
        <div className="inicio__conteudo">
          <span className="inicio__localizacao">
            GARUVA · SANTA CATARINA
          </span>

          <h1 className="inicio__titulo">
            A beleza que nasce
            <br />
            do <em>cuidado</em> verdadeiro
          </h1>

          <div className="inicio__linha"></div>

          <p className="inicio__descricao">
            No Espaço Innovar — Estética Avançada, cada protocolo é
            desenhado para você. Um momento de pausa, técnica apurada
            e um acolhimento que transforma o cuidado com a pele e o
            corpo em um ritual.
          </p>

          <div className="inicio__acoes">
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
          </div>

          <div className="inicio__indicadores">
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
          </div>
        </div>

        <div className="inicio__visual">
          <div className="inicio__moldura inicio__moldura--superior"></div>

          <div className="inicio__imagem-wrapper">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=90"
              alt="Tratamento de estética facial"
              className="inicio__imagem"
            />
          </div>

          <div className="inicio__moldura inicio__moldura--inferior"></div>

          <div className="inicio__selo">
            <strong>Estética avançada</strong>
            <span>COM PROPÓSITO</span>
          </div>
        </div>
      </div>

      <div className="inicio__transicao"></div>
    </section>
  )
}

export default Inicio