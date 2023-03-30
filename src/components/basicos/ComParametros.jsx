import React from 'react'

export default function ComParametros(props) {

    const status = props.nota >= 7 ? "Aprovado" : 'Recuperação'

    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3> <strong>{props.aluno}</strong> tem nota {props.nota}</h3>
            <h3>{status}</h3>
        </div>
    )
}