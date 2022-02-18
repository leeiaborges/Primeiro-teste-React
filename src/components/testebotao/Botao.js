import './Botao.css'
/* Exemplo usando props com estilo de cor dado em aula */
function TesteBotao (props) {
    return <button 
        style = {{backgroundColor: props.backColor}} className = "testeBotao"> {props.label} 
    </button>
} 

export default TesteBotao