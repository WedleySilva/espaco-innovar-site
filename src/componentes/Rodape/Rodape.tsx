import './Rodape.css'

function Rodape() {
  const anoAtual = new Date().getFullYear()

  return (
    <footer className="rodape">
      <div className="rodape__principal">
        <div className="container rodape__container">
          <div className="rodape__marca">
            <a href="#inicio" className="rodape__logo">
              <img
                src="https://res.cloudinary.com/drasiz1tf/image/upload/v1788713283/espa%C3%A7o-innovar/icon/logo-innovar-png.png"
                alt="Espaço Innovar"
                className="rodape__logo-icone"
              />

              <div className="rodape__logo-texto">
                <span>ESPAÇO</span>
                <span>INNOVAR</span>

                <div className="rodape__logo-subtitulo">
                  <span></span>
                  ESTÉTICA AVANÇADA
                </div>
              </div>
            </a>

            <p className="rodape__descricao">
              Estética avançada, massoterapia e cuidado
              individualizado em Garuva — SC.
            </p>
          </div>

          <div className="rodape__navegacao">
            <h3>NAVEGAÇÃO</h3>

            <nav>
              <a href="#inicio">Início</a>
              <a href="#tratamentos">Tratamentos</a>
              <a href="#clinica">A Clínica</a>
              <a href="#resultados">Resultados</a>
              <a href="#contato">Contato</a>
            </nav>
          </div>

          <div className="rodape__contato">
            <h3>CONTATO</h3>

            <div className="rodape__contato-lista">
              <a href="https://wa.me/5547997607747" target="_blank">
                (47) 99760-7747
              </a>

              <p>
                Garuva — Santa Catarina
              </p>

              <a
                href="https://instagram.com/clinica_innovar"
                target="_blank"
                rel="noreferrer"
              >
                @clinica_innovar
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="rodape__inferior">
        <div className="container rodape__inferior-container">
          <p>
            © {anoAtual} - ESPAÇO INNOVAR - TODOS OS DIREITOS RESERVADOS   
          </p>

          <span>
            <p>
            <a href="https://github.com/WedleySilva" target="_blank" rel="noreferrer">WEDLEY S. SCHMOELLER</a> - <a href="https://www.linkedin.com/in/wedley-silva-schmoeller-809104247" target="_blank" rel="noreferrer">ENGENHEIRO DE SOFTWARE</a>        
            </p>  
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Rodape