import React from 'react'
import './Card.css'

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#f00',
        borderColor: props.color || '#F00'
    }

    return(
        <div className='Card' style={cardStyle}>
            <div className='Card_title'>{props.titulo}</div>
            <div className='Card_content'>
                {props.children}
            </div>
        </div>
    )
}