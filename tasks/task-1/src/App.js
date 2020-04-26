import React, { useState } from 'react'
import './App.css'
import UserInput from './Components/UserInput/UserInput'
import UserOutput from './Components/UserOutput/UserOutput'

const App = () => {

    const initialUsername = 'John'
    const [ usernameState, setUsernameState ] = useState({ prevUsername: null, username: initialUsername })

    const valueChangedHandler = (ev) => {
        let target = ev.currentTarget
        setUsernameState(prevState => { return { prevUsername: prevState.username, username: target.value } })
    }

    const restartButtonStyle = {
        backgroundColor: '#eee',
        border: '2px solid #ccc',
        padding: '5px 10px',
        fontSize: '16px'
    }

    return (
        <div className="App">
            <h1>Task 1: UserInput vs UserOutput</h1>
            <button
                onClick={() => setUsernameState({username: initialUsername})}
                style={restartButtonStyle}
            >restart</button>
            <UserInput
                valueChanged={valueChangedHandler}
                value={usernameState.username}
            />
            <UserOutput
                initialUsername={initialUsername}
                prevUsername={usernameState.prevUsername}
                username={usernameState.username}
            />
        </div>
    );
}

export default App
