import React from 'react'
// import Radium from 'radium'
import './Person.css'
import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 60%;
    margin: 20px auto;
    border: 1px solid #ddd;
    box-shadow: 0 2px 3px #bbb;
    padding: 20px;
    text-align: center;

    @media (min-width: 500px): {
        width: 420px
    }
`

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

    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '420px'
    //     }
    // }

    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <p>My name is {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <p>
                <input type="text" onChange={props.nameChanged} value={props.name} />
            </p>
            <div>
                <button onClick={(ev) => addAgeClickHandler(ev)}>add age to {props.name}</button>
                <button onClick={props.click}>delete</button>
            </div>
        </StyledDiv>
        // </div>
    )
}

// export default Radium(person)
export default person