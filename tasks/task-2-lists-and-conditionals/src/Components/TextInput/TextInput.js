import React from 'react'
import './TextInput.css'

const TextInput = (props) => {
    return (
        <div className='card text-input'>
            <h2>Text Input component</h2>
            <input type='text' onChange={props.textChanged} value={props.value} />
        </div>
    )
}

export default TextInput