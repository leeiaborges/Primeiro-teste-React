import React, { useState } from 'react';
import './Carro.css';

function Carro(props) {
    return (
      <>
        <li className="item">
            <h2 className="title">Veículo - Carro</h2>
            <div className="label">Modelo: {props.modelo}</div>
            <div className="label">Marca: {props.marca}</div>
            <div className="label">Cor: {props.cor}</div>
            <div className="label">Ano: {props.ano}</div>
            <div className="label">Portas: {props.portas}</div>
            <div className="label">Combustível: {props.combustivel}</div>
            <div className="label">Câmbio: {props.cambio}</div>
            <div className="label">Aro: {props.tam_aro}</div>
            <div className="label">Potência: {props.potencia}</div>
            <div className="preco">R$ {props.preco}</div>
            <button className="btn-comprar">Comprar</button>
        </li>
      </>
    );
}

export default Carro;