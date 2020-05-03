import React from 'react'

import styles from './Person.module.css'
import withClass from '../../../hoc/WithClass/withClassFunc'

const person = (props) => {
    const addAgeClickHandler = (ev) => {
        ev.stopPropagation()
        props.makeOlder(ev)
    }

    return (
        <>
            <p>My name is {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <p>
                <input type="text" onChange={props.nameChanged} value={props.name} />
            </p>
            <div>
                <button onClick={(ev) => addAgeClickHandler(ev)}>add age to {props.name}</button>
                <button onClick={props.click}>delete</button>
            </div>
        </>
    )
}

export default withClass(person, styles.person)