import React from 'react'
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p>My name is {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <button onClick={(ev) => props.makeOlder(ev, { id: props.id })}>add age to {props.name}</button>
            <input type="text" onChange={(ev) => props.nameChanged(ev, { id: props.id })} value={props.name} />
        </div>
    )
}

export default person;