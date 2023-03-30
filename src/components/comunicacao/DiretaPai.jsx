import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return(
        <div>
            <DiretaFilho nome='Thiago' idade={24} nerd={true}></DiretaFilho>
            <DiretaFilho nome='José' idade={21} nerd={false}></DiretaFilho>
        </div>
    )
}