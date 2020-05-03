import React from 'react'
import PropTypes from 'prop-types'

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
                <button onClick={props.deleteClicked}>delete</button>
            </div>
        </>
    )
}

person.propTypes = {
    makeOlder: PropTypes.func,
    nameChanged: PropTypes.func,
    deleteClicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}

export default withClass(person, styles.person)