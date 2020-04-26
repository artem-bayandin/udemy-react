import React from 'react'
import './TextLengthValidator.css'

const TextLengthValidator = (props) => {
    let min = parseInt(props.min) || 0
    let max = parseInt(props.max) || 0
    let current = parseInt(props.current) || 0

    const result = current < min ? 'Too short' : current > max ? 'Too long' : 'Not Bad!'

    return (
        <div className='card text-length-validator'>
            <h2>Text Length Validator component</h2>
            <div>State: {result}</div>
        </div>
    )
}

export default TextLengthValidator