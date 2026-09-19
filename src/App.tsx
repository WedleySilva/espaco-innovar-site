import Cabecalho from './componentes/Cabecalho/Cabecalho'
import Inicio from './componentes/Inicio/Inicio'
import Tratamentos from './componentes/Tratamentos/Tratamentos'
import Avaliacao from './componentes/Avaliacao/Avaliacao'
import Clinica from './componentes/Clinica/Clinica'
import Experiencia from './componentes/Experiencia/Experiencia'
import Resultados from './componentes/Resultados/Resultados'
import Comentarios from './componentes/Comentarios/Comentarios'
import Chamada from './componentes/Chamada/Chamada'
import Contato from './componentes/Contato/Contato'
import Rodape from './componentes/Rodape/Rodape'

function App() {
  return (
    <>
      <Cabecalho />

      <main>
        <Inicio />
        <Tratamentos />
        <Avaliacao />
        <Clinica />
        <Experiencia />
        <Resultados />
        <Comentarios />
        <Chamada />
        <Contato />
      </main>

      <Rodape />
    </>
  )
}

export default App