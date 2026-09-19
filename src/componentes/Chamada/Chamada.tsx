import "./Chamada.css";

function Chamada() {
  const agendarWhatsApp = () => {
    window.open("https://wa.me/5547997607747", "_blank");
  };

  return (
    <section className="chamada">
      <div className="chamada__conteudo">
        <span className="chamada__eyebrow">
          <i></i>
          ESPAÇO INNOVAR · GARUVA — SC
        </span>

        <h2 className="chamada__titulo">
          <span>Sua próxima versão</span>
          <span>
            começa <em>agora</em>
          </span>
        </h2>

        <p className="chamada__descricao">
          Agende sua avaliação e descubra o protocolo ideal para os seus
          objetivos, conduzido por quem cuida de você de verdade.
        </p>

        <div className="chamada__acoes">
          <button
            type="button"
            className="chamada__botao chamada__botao--principal"
            onClick={agendarWhatsApp}
          >
            AGENDAR PELO WHATSAPP
            <span>→</span>
          </button>

          <a
            href="#contato"
            className="chamada__botao chamada__botao--secundario"
          >
            VER CONTATOS
          </a>
        </div>
      </div>
    </section>
  );
}

export default Chamada;
