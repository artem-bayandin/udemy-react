import React, { useState } from 'react';
import './App.css';
import TextInput from './Components/TextInput/TextInput';
import TextLengthValidator from './Components/TextLengthValidator/TextLengthValidator';
import CharList from './Components/Char/CharList';

function App() {
    const [ text, setText ] = useState('');

    const textChangedHandler = (ev) => {
        let currentTarget = ev.currentTarget
        setText(currentTarget.value)
    }

    const deleteByIndexHandler = (index) => {
        let newText = [...text]
        newText.splice(index, 1)
        setText(newText.join(''))
    }

    return (
        <div className="App">
            <h1>Task 2: Lists & Conditionals</h1>
            <TextInput textChanged={textChangedHandler} value={text} />
            <TextLengthValidator current={text.length} min="5" max="20" />
            <CharList text={text} deleteByIndex={deleteByIndexHandler} />
        </div>
    );
}

export default App;
