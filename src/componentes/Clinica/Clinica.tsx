import './Clinica.css'

function Clinica() {
  return (
    <section id="clinica" className="clinica">
      <div className="clinica__fundo"></div>

      <div className="container clinica__container">
        <div className="clinica__visual">
          <div className="clinica__moldura"></div>

          <div className="clinica__imagem-principal">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
              alt="Ambiente de atendimento do Espaço Innovar"
            />
          </div>

          <div className="clinica__imagem-secundaria">
            <img
              src="https://res.cloudinary.com/drasiz1tf/image/upload/v1789154012/espa%C3%A7o-innovar/angela/angela-espa%C3%A7o-innovar.jpg"
              alt="Dra. Angela - Espaço Innovar"
            />
          </div>
        </div>

        <div className="clinica__conteudo">
          <span className="clinica__eyebrow">
            <i></i>
            A CLÍNICA
          </span>

          <h2 className="clinica__titulo">
            Um espaço dedicado à sua <em>confiança</em>
          </h2>

          <div className="clinica__linha"></div>

          <div className="clinica__textos">
            <p>
              O Espaço Innovar nasceu em Garuva com um propósito claro:
              oferecer estética avançada de alto padrão, com atendimento
              humano e resultados reais. Cada detalhe do ambiente foi
              pensado para que você se sinta acolhida do primeiro contato
              ao último retorno.
            </p>

            <p>
              Nossa equipe é formada por profissionais qualificados, em
              constante atualização, que trabalham com tecnologias
              reconhecidas e protocolos individualizados.
            </p>
          </div>

          <div className="clinica__diferenciais">
            <div className="clinica__diferencial">
              <h3>Técnica</h3>

              <p>
                Protocolos baseados em evidência e atualização contínua.
              </p>
            </div>

            <div className="clinica__diferencial">
              <h3>Acolhimento</h3>

              <p>
                Um ambiente sereno, discreto e verdadeiramente seu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clinica