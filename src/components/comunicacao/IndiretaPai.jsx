import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {

    function fornecerInfos (nome, idade, nerd) {
        console.log(nome, idade, nerd);
    }

    return(
        <div>
            <div>
                Pai
            </div>

            <IndiretaFilho quandoClicar={fornecerInfos}></IndiretaFilho>
        </div>
    )
}