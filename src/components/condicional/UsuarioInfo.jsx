import React from 'react'
import If, {Else} from './If'

export default props => {

    const usuario = props.usuario || {}
    return(
        <div>
            <If test={usuario && usuario.nome}>
                Seja Bem-vindo! :D <strong>{usuario.nome}!</strong>
            </If>
            
        </div>
    )
}