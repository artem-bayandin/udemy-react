import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className='card '>
            <h2>User Input component</h2>
            <p>Initial value: <b>{props.initialUsername}</b></p>
            <p>Prev value: <b>{props.prevUsername || '<<not set>>'}</b></p>
            <p>Current value: <b>{props.username}</b></p>
        </div>
    )
}

export default UserOutput