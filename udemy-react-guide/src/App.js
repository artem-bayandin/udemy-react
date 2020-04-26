import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
    const [ peopleState, setPeople ] = useState({
        people: [ { id: 1, name: 'Bob', age: 18 }, { id: 2, name: 'John', age: 33 }, { id: 3, name: 'Mary', age: 25 }]
    });

    const addAgeToAll = () => {
        setPeople(prevState => { 
            return { people: prevState.people.map(p => { return {...p, age: p.age + 1}; }) }
        })
    };

    const makeOneOlderHandler = (event, payload) => {
        let target = event.currentTarget;
        setPeople(prevState => { 
            return { people: prevState.people.map(p => { return p.id === payload.id ? {...p, age: p.age + 1} : p }) }
        })
    }

    const nameChangedHandler = (event, payload) => {
        let target = event.currentTarget;
        setPeople(prevState => { 
            return { people: prevState.people.map(p => { return p.id === payload.id ? {...p, name: target.value} : p }) }
        })
    }

    const buttonStyle = {
        backgroundColor: 'white',
        border: '2px solid #aaa',
        padding: '5px 10px',
        fontSize: '16px'
    }

    return (
        <div className="App">
            <h1>hello</h1>
            <button onClick={addAgeToAll} style={buttonStyle}>add age to everybody</button>
            {
                peopleState.people.map(item=><Person key={item.id} id={item.id} name={item.name} age={item.age} makeOlder={makeOneOlderHandler} nameChanged={nameChangedHandler}  />)
            }
        </div>
    );
}

export default App;
