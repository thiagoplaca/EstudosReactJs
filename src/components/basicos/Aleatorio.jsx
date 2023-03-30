import React from 'react'

export default (props) => {

    const {min, max} = props
    const aleatorio = Math.floor(Math.random() * (max - min) - 1)

    return (
        <div>
            <h1>Número Aleatório</h1>
            <p><strong>Valor Máximo: {props.max}</strong></p>
            <p><strong>Valor Máximo: {props.min}</strong></p>
            <p>Resultado: {aleatorio} </p>
        </div>
    )
}

    
