import './Experiencia.css'

type Diferencial = {
  numero: string
  titulo: string
  descricao: string
}

const diferenciais: Diferencial[] = [
  {
    numero: '01',
    titulo: 'Atendimento personalizado',
    descricao: 'Cada plano começa em uma escuta atenta sobre você.',
  },
  {
    numero: '02',
    titulo: 'Tecnologia',
    descricao: 'Equipamentos modernos para resultados seguros e consistentes.',
  },
  {
    numero: '03',
    titulo: 'Profissionais qualificados',
    descricao: 'Equipe especializada em estética avançada.',
  },
  {
    numero: '04',
    titulo: 'Ambiente acolhedor',
    descricao: 'Serenidade e privacidade em cada atendimento.',
  },
  {
    numero: '05',
    titulo: 'Estética avançada',
    descricao: 'Protocolos faciais, corporais e combinados.',
  },
  {
    numero: '06',
    titulo: 'Cuidado individualizado',
    descricao: 'Acompanhamento próximo em toda a jornada.',
  },
]

function Experiencia() {
  return (
    <section className="experiencia">
      <div className="experiencia__fundo"></div>

      <div className="container experiencia__container">
        <div className="experiencia__cabecalho">
          <span className="experiencia__eyebrow">
            <i></i>
            A EXPERIÊNCIA INNOVAR
          </span>

          <h2 className="experiencia__titulo">
            Detalhes que fazem a{' '}
            <em>diferença</em>
          </h2>
        </div>

        <div className="experiencia__grid">
          {diferenciais.map((diferencial) => (
            <article
              key={diferencial.numero}
              className="experiencia__card"
            >
              <span className="experiencia__numero">
                {diferencial.numero}
              </span>

              <h3 className="experiencia__card-titulo">
                {diferencial.titulo}
              </h3>

              <p className="experiencia__card-descricao">
                {diferencial.descricao}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiencia