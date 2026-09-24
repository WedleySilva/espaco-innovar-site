import { motion, type Easing } from 'framer-motion'
import './Experiencia.css'

const ease: Easing = [0.22, 1, 0.36, 1]

const revealHeader = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease,
    },
  },
}

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
}

const revealRight = {
  hidden: {
    opacity: 0,
    x: 35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
}

const cards = [
  {
    numero: '01',
    lado: 'esquerda',
    label: 'ACOLHIMENTO',
    titulo: 'Um cuidado que começa antes do tratamento',
    descricao:
      'A experiência na Espaço Innovar começa no primeiro contato. Cada pessoa é recebida com atenção, escuta e respeito, criando um ambiente confortável para conversar sobre suas necessidades e expectativas.',
    detalhe: 'Escuta individual · Ambiente tranquilo',
  },
  {
    numero: '02',
    lado: 'direita',
    label: 'PERSONALIZAÇÃO',
    titulo: 'Cada pessoa possui uma história',
    descricao:
      'Nenhum tratamento é pensado de forma genérica. Avaliamos características, objetivos e particularidades para construir uma abordagem que faça sentido para você.',
    detalhe: 'Avaliação cuidadosa · Plano individual',
  },
  {
    numero: '03',
    lado: 'esquerda',
    label: 'PRECISÃO',
    titulo: 'Técnica aliada à delicadeza',
    descricao:
      'Conhecimento e precisão caminham juntos em cada procedimento. O cuidado está tanto na escolha das técnicas quanto na atenção aos pequenos detalhes durante todo o processo.',
    detalhe: 'Técnica · Segurança · Naturalidade',
  },
  {
    numero: '04',
    lado: 'direita',
    label: 'TECNOLOGIA',
    titulo: 'Recursos que acompanham a evolução',
    descricao:
      'Tecnologia e conhecimento são utilizados de maneira consciente para ampliar possibilidades de tratamento e proporcionar uma experiência cada vez mais completa.',
    detalhe: 'Recursos modernos · Aplicação responsável',
  },
  {
    numero: '05',
    lado: 'esquerda',
    label: 'CONFORTO',
    titulo: 'Um espaço pensado para desacelerar',
    descricao:
      'Do ambiente aos detalhes, tudo foi planejado para transmitir tranquilidade. Um espaço onde o cuidado também acontece através da sensação de estar bem.',
    detalhe: 'Atmosfera acolhedora · Privacidade',
  },
  {
    numero: '06',
    lado: 'direita',
    label: 'RESULTADO',
    titulo: 'Beleza que respeita sua individualidade',
    descricao:
      'O objetivo é valorizar aquilo que já existe em você, buscando resultados equilibrados e coerentes com suas características, sem perder sua identidade.',
    detalhe: 'Equilíbrio · Harmonia · Autenticidade',
  },
]

function Experiencia() {
  return (
    <section className="experiencia">
      <div className="experiencia__borda experiencia__borda--top" />

      <div className="experiencia__fundo" />

      <div className="container experiencia__container">
        <motion.header
          className="experiencia__cabecalho"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          <motion.div className="experiencia__eyebrow" variants={revealHeader}>
            <i />
            A EXPERIÊNCIA INNOVAR
          </motion.div>

          <div className="experiencia__titulo-area">
            <motion.h2
              className="experiencia__titulo"
              variants={revealHeader}
            >
              Mais do que um tratamento,
              <em> uma experiência.</em>
            </motion.h2>

            <motion.div className="experiencia__indice" variants={revealHeader}>
              <span>06</span>
              <small>
                momentos
                <br />
                de cuidado
              </small>
            </motion.div>
          </div>

          <motion.div
            className="experiencia__introducao"
            variants={revealHeader}
          >
            <span className="experiencia__introducao-linha" />

            <p>
              Cada etapa foi pensada para transformar o cuidado em um momento
              de conexão, tranquilidade e confiança. Da chegada ao resultado,
              buscamos fazer com que você se sinta verdadeiramente acolhido.
            </p>
          </motion.div>
        </motion.header>

        <div className="experiencia__estrutura">
          <div className="experiencia__linha-central">
            <span className="experiencia__linha-brilho" />
          </div>

          <div className="experiencia__grid">
            {cards.map((card, index) => (
              <motion.article
                key={card.numero}
                className={`experiencia__item experiencia__item--${card.lado}`}
                variants={card.lado === 'esquerda' ? revealLeft : revealRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  delay: index * 0.05,
                }}
              >
                <div className="experiencia__item-conteudo">
                  <span className="experiencia__numero">
                    {card.numero}
                  </span>

                  <div className="experiencia__card">
                    <div className="experiencia__card-topo">
                      <span className="experiencia__card-indicador" />
                      <span className="experiencia__card-label">
                        {card.label}
                      </span>
                    </div>

                    <h3 className="experiencia__card-titulo">
                      {card.titulo}
                    </h3>

                    <p className="experiencia__card-descricao">
                      {card.descricao}
                    </p>

                    <div className="experiencia__card-detalhe">
                      <span className="experiencia__card-detalhe-linha" />
                      <span>{card.detalhe}</span>
                    </div>

                    <span className="experiencia__card-numero">
                      {card.numero}
                    </span>
                  </div>
                </div>

                <span className="experiencia__ponto" />
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="experiencia__fechamento"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="experiencia__fechamento-linha" />

          <p>
            Porque cuidar de você também pode ser
            <em> uma experiência para guardar.</em>
          </p>

          <span className="experiencia__fechamento-linha" />
        </motion.div>
      </div>

      <div className="experiencia__borda experiencia__borda--bottom" />
    </section>
  )
}

export default Experiencia
