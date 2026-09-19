import './Resultados.css'

type Resultado = {
  imagem: string
  titulo: string
  classe: string
}

const resultados: Resultado[] = [
  {
    imagem:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85',
    titulo: 'REJUVENESCIMENTO FACIAL',
    classe: 'resultados__item--principal',
  },
  {
    imagem:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85',
    titulo: 'TECNOLOGIA AVANÇADA',
    classe: 'resultados__item--tecnologia',
  },
  {
    imagem:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=85',
    titulo: 'MASSOTERAPIA',
    classe: 'resultados__item--massoterapia',
  },
  {
    imagem:
      'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1100&q=85',
    titulo: 'ESTÉTICA CORPORAL',
    classe: 'resultados__item--corporal',
  },
]

function Resultados() {
  return (
    <section id="resultados" className="resultados">
      <div className="resultados__fundo"></div>

      <div className="container resultados__container">
        <div className="resultados__cabecalho">
          <span className="resultados__eyebrow">
            <i></i>
            RESULTADOS & PROCEDIMENTOS
          </span>

          <h2 className="resultados__titulo">
            Uma estética de{' '}
            <em>acabamento natural</em>
          </h2>
        </div>

        <div className="resultados__galeria">
          {resultados.map((resultado) => (
            <article
              key={resultado.titulo}
              className={`resultados__item ${resultado.classe}`}
            >
              <img
                src={resultado.imagem}
                alt={resultado.titulo}
                className="resultados__imagem"
              />

              <div className="resultados__overlay"></div>

              <span className="resultados__label">
                {resultado.titulo}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resultados