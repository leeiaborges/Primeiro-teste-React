import React, { useState } from 'react'


export default props => {
    const [numero, setNumero] = useState(props.inicial);
    
    const inc = () => {
        if (numero == props.limite){
            alert("Você atingiu o limite máximo!");
            return
        }
        
        setNumero(numero + props.passo);
    }

    const dec = () => {
        if (numero == 0){
            alert("Você atingiu o limite mínimo!");
            return
        }
        setNumero(numero - props.passo);
    }

    return (
        <>
            <h2>{numero}</h2>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </>
    );
}

    