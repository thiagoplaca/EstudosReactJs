import React, { useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInfos (nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(false)

        
    }

    return(
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade} </strong></span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'} </span>
            </div>

            <IndiretaFilho quandoClicar={fornecerInfos}></IndiretaFilho>
        </div>
    )
}