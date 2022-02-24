import './App.css';
/*import Primeiro from './components/Primeiro';
import Multi, { Componete1, Componete2 } from './components/Multi'
import Estilos from './components/estilos/Estilos.js';
import MinMax from './components/MinMax';
import Botao from './components/testebotao/Botao';
import ExBotao from './components/Botao';
import Titulo from './components/Titulo';
import Contador from './components/Contador';*/
import Pessoa from './components/pessoa/Pessoa'
import Produto from './components/produto/Produto'


/* SEGUNDA AULA REACT */

function App() {
  return (
    <div>
      <ul>
        <Produto nome="teclado" marca="dell" valor="179,90" azul />
        <Produto nome="monitor" marca="philips" valor="900,00" verde />
        <Produto nome="Caneca" marca="QSD" valor="20,00" preto />
      </ul>

      <Pessoa nome="Jonas" idade="28" sexo="M" estado_civil="casado" />
      <Pessoa nome="Will" idade="18" sexo="M" estado_civil="casado" />
      <Pessoa nome="Wanderson" idade="21" sexo="M" estado_civil="solteiro" />

      {/*
      <Primeiro />
      <Multi/>
      <Componete1/>
      <Componete2/>

      Criar um componente chamado Estilos
      <Estilos/>

      Criando um componentes MinMax
      <MinMax min = "5" max = "10"/>
      <MinMax min = {10} max = {20}/>

      Criando um componente Botao
      <ExBotao/>

      Exemplo botao em Aula
      <Botao label="Comprar" backColor="red"/>
      <Botao label="Adicionar ao carrinho" backColor="green"/>
      <Botao label="Finalizar compra" backColor="blue"/>  

      Criar um componente chamado Titulo com React Fragment
      <Titulo principal = "ola" secundario = "tudo bem"/> 

      {Criar um componente chamado Contador }
      < Contador inicial = {0} passo = {10} limite = {50}/>*/}
    </div>
  )
}

export default App;


/* INTRODUÇÃO A REACT - PRIMEIRO AULA */

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







