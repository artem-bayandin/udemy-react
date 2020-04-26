import React from 'react'
import './Char.css'

const Char = (props) => <div className='char' onClick={props.click}>{props.item}</div>

export default Char