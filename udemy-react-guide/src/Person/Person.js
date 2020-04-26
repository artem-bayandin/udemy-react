import React from 'react'
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p>My name is {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <button onClick={props.makeOlder}>add age to {props.name}</button>
            <input type="text" onChange={props.nameChanged} value={props.name} />
        </div>
    )
}

export default person;