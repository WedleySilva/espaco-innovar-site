import './Contato.css'

function Contato() {
  const whatsapp = () => {
    window.open(
      'https://wa.me/5547997607747',
      '_blank'
    )
  }

  return (
    <section id="contato" className="contato">
      <div className="contato__fundo"></div>

      <div className="container contato__container">
        <header className="contato__cabecalho">
          <span className="contato__eyebrow">
            <i></i>
            CONTATO
          </span>

          <h2 className="contato__titulo">
            Estamos em <em>Garuva</em>, Santa Catarina
          </h2>
        </header>

        <div className="contato__grid">
          <div className="contato__links">
            <button
              type="button"
              className="contato__card"
              onClick={whatsapp}
            >
              <div>
                <span className="contato__card-label">
                  WHATSAPP
                </span>

                <strong>
                  (47) 99760-7747
                </strong>
              </div>

              <span className="contato__seta">
                →
              </span>
            </button>

            <a
              href="https://www.facebook.com/espacoinnovarangela/?locale=pt_BR"
              target="_blank"
              rel="noreferrer"
              className="contato__card"
            >
              <div>
                <span className="contato__card-label">
                  FACEBOOK
                </span>

                <strong>
                  Espaço Innovar
                </strong>
              </div>

              <span className="contato__seta">
                →
              </span>
            </a>

            <a
              href="https://www.instagram.com/clinica_innovar/"
              target="_blank"
              rel="noreferrer"
              className="contato__card"
            >
              <div>
                <span className="contato__card-label">
                  INSTAGRAM
                </span>

                <strong>
                  @espacoinnovar
                </strong>
              </div>

              <span className="contato__seta">
                →
              </span>
            </a>
          </div>

          <div className="contato__informacoes">
            <div className="contato__bloco">
              <h3>Endereço</h3>

              <div className="contato__linha"></div>

              <p>
                R. Carijós, 285
                <br />
                Centro · Garuva — Santa Catarina
              </p>

              <span>
                Atendimento com agendamento prévio
              </span>
            </div>

            <div className="contato__bloco">
              <h3>Horário</h3>

              <div className="contato__linha"></div>

              <div className="contato__horarios">
                <div>
                  <span>Segunda a sexta</span>
                  <strong>09h — 19h</strong>
                </div>

                <div>
                  <span>Sábado</span>
                  <strong>09h — 14h</strong>
                </div>

                <div>
                  <span>Domingo</span>
                  <strong>Fechado</strong>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="contato__botao"
              onClick={whatsapp}
            >
              AGENDAR AVALIAÇÃO
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato