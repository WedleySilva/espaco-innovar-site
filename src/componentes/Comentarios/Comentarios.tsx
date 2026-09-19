import './Comentarios.css'

type Comentario = {
  nome: string
  identificacao: string
  tempo: string
  texto: string
}

const comentarios: Comentario[] = [
  {
    nome: 'Larissa Correa',
    identificacao: '1 avaliação',
    tempo: '3 anos atrás',
    texto: 'Atendimento maravilhoso! Recomendo.',
  },
  {
    nome: 'Léia Marques Duarte',
    identificacao: '1 avaliação',
    tempo: '3 anos atrás',
    texto: 'Amooo, sou muito bem atendida profissionais capacitados.',
  },
  {
    nome: 'Ruthe R. Souza',
    identificacao: '4 avaliações',
    tempo: '3 anos atrás',
    texto:
      'Tudo excelente, atendimento, o ambiente, Ângela é uma ótima pessoa e profissional, e a massagem a 4 mãos também é maravilhosa, super recomendo.',
  },
]

function Comentarios() {
  return (
    <section id="comentarios" className="comentarios">
      <div className="comentarios__fundo"></div>

      <div className="container comentarios__container">
        <header className="comentarios__cabecalho">
          <span className="comentarios__eyebrow">
            <i></i>
            AVALIAÇÕES
            <i></i>
          </span>

          <h2 className="comentarios__titulo">
            O que dizem sobre o <em>Innovar</em>
          </h2>
        </header>

        <div className="comentarios__area">
          <div className="comentarios__grid">
            {comentarios.map((comentario, index) => (
              <article
                key={`${comentario.nome}-${index}`}
                className="comentarios__card"
              >
                <div className="comentarios__estrelas">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <p className="comentarios__texto">“{comentario.texto}”</p>

                <hr className="comentarios__divisor" />

                <div className="comentarios__autor-box">
                  <span className="comentarios__nome">{comentario.nome}</span>
                  <span className="comentarios__info">
                    {comentario.identificacao} • {comentario.tempo}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comentarios