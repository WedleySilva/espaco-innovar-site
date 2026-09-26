import { useState } from "react";
import { AnimatePresence, motion, type Easing } from "framer-motion";
import "./Resultados.css";

type Resultado = {
  imagem: string;
  categoria: string;
  titulo: string;
  descricao: string;
  procedimentos: string[];
};

const resultados: Resultado[] = [
  {
    imagem:
      "https://res.cloudinary.com/drasiz1tf/image/upload/v1790441539/espa%C3%A7o-innovar/tratamentos/cuidado-facial.jpg",
    categoria: "FACIAL",
    titulo: "Cuidados faciais",
    descricao:
      "Protocolos personalizados para rejuvenescimento, hidratação, harmonia e renovação da pele.",
    procedimentos: [
      "Toxina botulínica",
      "Preenchimentos facial e labial",
      "Skinbooster",
      "Bioestimulador de colágeno",
      "Fios de PDO",
      "Microagulhamento",
      "Limpeza de pele",
      "Peelings",
    ],
  },
  {
    imagem:
      "https://res.cloudinary.com/drasiz1tf/image/upload/v1790441911/espa%C3%A7o-innovar/tratamentos/tratamento-corporal.webp",
    categoria: "CORPORAL",
    titulo: "Protocolos corporais",
    descricao:
      "Tratamentos personalizados voltados ao contorno corporal, celulite, estrias, circulação e cuidados com a pele.",
    procedimentos: [
      "Subcisão de celulites",
      "Tratamento para estrias",
      "Massagem modeladora",
      "Drenagem linfática",
      "Manta térmica detox",
      "Redução de medidas",
    ],
  },
  {
    imagem:
      "https://res.cloudinary.com/drasiz1tf/image/upload/v1790442333/espa%C3%A7o-innovar/tratamentos/massagem-pedras-quentes.webp",
    categoria: "BEM-ESTAR",
    titulo: "Massoterapia",
    descricao:
      "Momentos de cuidado voltados ao relaxamento, alívio de tensões, circulação e sensação de bem-estar.",
    procedimentos: [
      "Massagem relaxante",
      "Massagem terapêutica",
      "Ventosaterapia",
      "Drenagem linfática",
      "Massagem modeladora",
    ],
  },
  {
    imagem:
      "https://res.cloudinary.com/drasiz1tf/image/upload/v1790443238/espa%C3%A7o-innovar/tratamentos/aplica%C3%A7%C3%A3o-enzimas.jpg",
    categoria: "SUPLEMENTAÇÕES",
    titulo: "Suplementações injetáveis",
    descricao:
      "Protocolos individualizados definidos conforme avaliação profissional, objetivos e necessidades de cada pessoa.",
    procedimentos: [
      "Acelerador metabólico",
      "Ganho de massa magra",
      "Auxílio no emagrecimento",
      "Complexo B",
      "Aminoácidos",
      "Curcumina",
      "Zinco",
      "Ativos para flacidez",
    ],
  },
  {
    imagem:
      "https://res.cloudinary.com/drasiz1tf/image/upload/v1790443383/espa%C3%A7o-innovar/tratamentos/laser-diodo.webp",
    categoria: "ESTÉTICA AVANÇADA",
    titulo: "Tecnologia e procedimentos",
    descricao:
      "Tecnologias e procedimentos especializados que complementam protocolos faciais e corporais personalizados.",
    procedimentos: [
      "Depilação a laser de diodo",
      "Radiofrequência",
      "Ultrassom",
      "Laser",
      "Criofrequência",
      "PEIM — aplicação de microvasos",
      "Jato de plasma",
    ],
  },
];

const ease: Easing = [0.22, 1, 0.36, 1];

const revealUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease,
    },
  },
};

const revealHeader = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

function irParaContato() {
  document.getElementById("contato")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function Resultados() {
  const [selecionado, setSelecionado] = useState(0);

  const resultadoPrincipal = resultados[selecionado];
  const resultadosSecundarios = resultados.filter(
    (_, index) => index !== selecionado,
  );

  return (
    <section id="resultados" className="resultados">
      <div className="resultados__fundo" />

      <div className="container resultados__container">
        <motion.header
          className="resultados__cabecalho"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealHeader}
        >
          <div className="resultados__eyebrow">
            <i />
            RESULTADOS & PROCEDIMENTOS
          </div>

          <div className="resultados__cabecalho-conteudo">
            <h2 className="resultados__titulo">
              Cuidado pensado para
              <em> cada detalhe.</em>
            </h2>

            <p className="resultados__introducao">
              Da estética facial ao bem-estar, cada protocolo começa com uma
              avaliação individualizada para entender suas necessidades e
              objetivos.
            </p>
          </div>

          <div className="resultados__linha" />
        </motion.header>

        <motion.div
          className="resultados__explorador"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.div className="resultados__principal" variants={revealUp}>
            <AnimatePresence mode="wait">
              <motion.article
                key={resultadoPrincipal.titulo}
                className="resultados__principal-card"
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.5, ease }}
              >
                <img
                  src={resultadoPrincipal.imagem}
                  alt={resultadoPrincipal.titulo}
                  className="resultados__principal-imagem"
                />

                <div className="resultados__principal-overlay" />

                <div className="resultados__principal-conteudo">
                  <div className="resultados__principal-topo">
                    <span>{resultadoPrincipal.categoria}</span>

                    <span className="resultados__principal-numero">
                      {String(selecionado + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="resultados__principal-info">
                    <h3>{resultadoPrincipal.titulo}</h3>

                    <p>{resultadoPrincipal.descricao}</p>

                    <div className="resultados__procedimentos-preview">
                      {resultadoPrincipal.procedimentos
                        .slice(0, 4)
                        .map((procedimento) => (
                          <span key={procedimento}>{procedimento}</span>
                        ))}
                    </div>

                    <button
                      type="button"
                      className="resultados__acao"
                      onClick={irParaContato}
                    >
                      <span>Agendar avaliação</span>
                      <span className="resultados__acao-icone">↗</span>
                    </button>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </motion.div>

          <motion.div className="resultados__lista" variants={revealUp}>
            {resultadosSecundarios.map((resultado) => {
              const index = resultados.findIndex(
                (item) => item.titulo === resultado.titulo,
              );

              return (
                <motion.button
                  key={resultado.titulo}
                  type="button"
                  className="resultados__opcao"
                  onMouseEnter={() => setSelecionado(index)}
                  onFocus={() => setSelecionado(index)}
                  onClick={() => {
                    setSelecionado(index);
                  }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.35, ease }}
                >
                  <div className="resultados__opcao-imagem">
                    <img src={resultado.imagem} alt="" />
                    <span />
                  </div>

                  <div className="resultados__opcao-conteudo">
                    <span className="resultados__opcao-categoria">
                      {resultado.categoria}
                    </span>

                    <strong>{resultado.titulo}</strong>

                    <span className="resultados__opcao-quantidade">
                      {resultado.procedimentos.length} procedimentos
                    </span>

                    <span className="resultados__opcao-seta">↗</span>
                  </div>
                </motion.button>
              );
            })}

            <motion.button
              type="button"
              className="resultados__contato"
              onClick={irParaContato}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.35, ease }}
            >
              <span className="resultados__contato-numero">05</span>

              <span className="resultados__contato-texto">
                Não sabe qual tratamento escolher?
                <strong>Fale com a nossa equipe.</strong>
              </span>

              <span className="resultados__contato-seta">↗</span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="resultados__rodape"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={revealUp}
        >
          <p>
            Seu cuidado começa com uma conversa e uma avaliação pensada para
            você.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Resultados;
