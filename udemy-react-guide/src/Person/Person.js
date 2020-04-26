import React from 'react'
import Radium from 'radium'
import './Person.css'

const person = (props) => {
    const addAgeClickHandler = (ev) => {
        ev.stopPropagation()
        props.makeOlder(ev)
    }

    const style = {
        '@media (min-width: 500px)': {
            width: '420px'
        }
    }

    return (
        <div className="Person" style={style}>
            <p>My name is {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <p>
                <input type="text" onChange={props.nameChanged} value={props.name} />
            </p>
            <div>
                <button onClick={(ev) => addAgeClickHandler(ev)}>add age to {props.name}</button>
                <button onClick={props.click}>delete</button>
            </div>
            
        </div>
    )
}

export default Radium(person);