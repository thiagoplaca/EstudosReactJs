import React, { useState } from 'react'
import './Input.css'

export default props => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value);
    }

    return (
        <div className='Input'>
            <h2>{valor} </h2>
            <div style={{
                display: 'Flex',
                flexDirection: 'column',
            }}>
                <input value={valor} onChange={quandoMudar} style={{marginBottom: '15px'}}/>
                <input value={valor} />

                {/* /* Espera-se um evento onChange na tag input */ }
            </div>

        </div>
    )
}