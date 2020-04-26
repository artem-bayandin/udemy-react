import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className='card '>
            <h2>User Input component <i>{props.name.toUpperCase()}</i></h2>
            <p>Username: <b>{props.username}</b></p>
            <p>Prev value: <b>{props.prevUsername || '<<not set>>'}</b></p>
            <p>Initial value: <b>{props.initialUsername || '<<not set>>'}</b></p>
        </div>
    )
}

export default UserOutput