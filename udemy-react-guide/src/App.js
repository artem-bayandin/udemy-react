import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
import Radium, { StyleRoot } from 'radium'

const App = props => {
    const initialState = {
        people: [
            { id: 1, name: 'Bob', age: 18 },
            { id: 2, name: 'John', age: 33 },
            { id: 3, name: 'Daddy', age: 65 },
            { id: 4, name: 'Diana', age: 21 },
            { id: 5, name: 'Mary', age: 25 }
        ]
    }

    const [peopleState, setPeople] = useState(initialState)

    const addAgeToAll = () => {
        setPeople(prevState => {
            return { people: [...prevState.people.map(p => { return { ...p, age: p.age + 1 } })] }
        })
    }

    const makeOneOlderHandler = (event, id) => {
        let target = event.currentTarget;
        setPeople(prevState => {
            return { people: [...prevState.people.map(p => { return p.id === id ? { ...p, age: p.age + 1 } : p })] }
        })
    }

    const nameChangedHandler = (event, id) => {
        let target = event.currentTarget;
        setPeople(prevState => {
            return { people: [...prevState.people.map(p => { return p.id === id ? { ...p, name: target.value } : p })] }
        })
    }

    const deletePersonById = (id) => {
        setPeople(prevState => {
            return { people: [...prevState.people.filter(p => p.id !== id)] }
        })
    }

    const [viewPeople, setViewPeople] = useState(false)

    const buttonStyle = {
        backgroundColor: 'white',
        border: '2px solid #aaa',
        padding: '5px 10px',
        fontSize: '16px',
        marginRight: '10px',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    }

    const resetBtnStyles = [];
    if (peopleState.people.length > 3) {
        resetBtnStyles.push('combined-italic')
    }
    if (peopleState.people.length < 3) {
        resetBtnStyles.push('combined-bold')
    }
    if (peopleState.people.length < 1) {
        resetBtnStyles.push('combined-red')
    }

    let addAgeToEverybodyStyle = { ...buttonStyle }
    if (viewPeople) {
        addAgeToEverybodyStyle[':hover'] = {
            backgroundColor: 'lightyellow',
            color: 'darkblue'
        }
    }

    return (
        <StyleRoot>
            <div className="App">
                <h1>hello</h1>
                <button
                    key="resetBtn"
                    onClick={() => setPeople(initialState)}
                    style={buttonStyle}
                    className={resetBtnStyles.join(' ')}
                >reset</button>
                <button
                    key="addAgeToEverybodyBtn"
                    onClick={addAgeToAll}
                    style={addAgeToEverybodyStyle}
                >add age to everybody</button>
                <button
                    key="togglePeople"
                    onClick={() => setViewPeople(prevState => !prevState)}
                    style={buttonStyle}
                >toggle view</button>
                {
                    viewPeople &&
                    peopleState.people.map(item =>
                        <Person
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            age={item.age}
                            makeOlder={(ev) => makeOneOlderHandler(ev, item.id)}
                            nameChanged={(ev) => nameChangedHandler(ev, item.id)}
                            click={() => deletePersonById(item.id)}
                        />)
                }
            </div>
        </StyleRoot>
    );
}

export default Radium(App);
