const MinMax = (props) => {
    console.log(props)
    let result = props.min + props.max
    return (
    <div>
        <><h2 className="titulo">O valor de {props.max} é maior que o valor de  {props.min}</h2>
        <h2>{result}</h2></>
    </div>
    )
}

export default MinMax