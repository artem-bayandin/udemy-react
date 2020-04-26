import React from 'react'
import './UserInput.css'

const UserInput = (props) => {
    return (
        <div className='card user-input'>
            <h2>User Input component</h2>
            <input type="text" onChange={props.valueChanged} value={props.value} />
        </div>
    )
}

export default UserInput