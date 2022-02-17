import './App.css';
import Primeiro from './components/Primeiro';
import Multi, { Componete1, Componete2 } from './components/Multi'

/* Exemplo Multi*/
function App () {
  return (
    <div>
      <Primeiro />
      <Multi/>
      <Componete1/>
      <Componete2/>
    </div>
  )
}
export default App;



/* export default function App () {
  return (
    <Primeiro></Primeiro>
  );
} */


/* Arrow function com o return implícito*/
/*export default () => <h2>Primeiro Componente</h2>*/


/* Função anonima */
/* export default function () {
  return <h2>Primeiro Componente</h2>
}*/


/* Atribuindo a uma variável */
/* const App = function () {
  return (
      <h1>Primeiro Componente</h1>
  );
}
export default App;
*/


/* Função chamada App() */
/*  function App() {
  return (
      <h1>Hello Word</h1>
  );
}
export default App;
*/







