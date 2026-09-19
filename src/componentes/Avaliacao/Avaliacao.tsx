import './Avaliacao.css'

function Avaliacao() {
  const agendarAvaliacao = () => {
    window.open(
      'https://wa.me/5547997607747', 
      '_blank'
    )
  }

  const etapas = [
    {
      numero: '01',
      titulo: 'Anamnese detalhada e análise de pele',
    },
    {
      numero: '02',
      titulo: 'Plano de tratamento individualizado',
    },
    {
      numero: '03',
      titulo: 'Acompanhamento de resultados',
    },
  ]

  return (
    <div className="avaliacao">
      <div className="avaliacao__circulo avaliacao__circulo--inferior"></div>
      <div className="avaliacao__circulo avaliacao__circulo--superior"></div>

      <div className="container avaliacao__container">
        <div className="avaliacao__conteudo">
          <span className="avaliacao__eyebrow">
            <i></i>
            AVALIAÇÃO PERSONALIZADA
          </span>

          <h2 className="avaliacao__titulo">
            Seu tratamento começa por
            <br />
            <em>ouvir você</em>
          </h2>

          <p className="avaliacao__descricao">
            Antes de qualquer procedimento, realizamos uma avaliação
            completa da pele, do corpo e dos seus objetivos. É assim
            que construímos protocolos seguros, eficazes e feitos sob
            medida.
          </p>

          <button
            type="button"
            className="avaliacao__botao"
            onClick={agendarAvaliacao}
          >
            QUERO MINHA AVALIAÇÃO
            <span>→</span>
          </button>
        </div>

        <div className="avaliacao__etapas">
          {etapas.map((etapa) => (
            <div
              key={etapa.numero}
              className="avaliacao__etapa"
            >
              <span className="avaliacao__numero">
                {etapa.numero}
              </span>

              <span className="avaliacao__etapa-titulo">
                {etapa.titulo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Avaliacao