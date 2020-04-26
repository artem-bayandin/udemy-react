import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
    const [ peopleState, setPeople ] = useState({
        people: [ { id: 1, name: 'Bob', age: 18 }, { id: 2, name: 'John', age: 33 }, { id: 3, name: 'Mary', age: 25 }]
    })

    const addAgeToAll = () => {
        setPeople(prevState => { 
            return { people: [...prevState.people.map(p => { return {...p, age: p.age + 1} })] }
        })
    }

    const makeOneOlderHandler = (event, id) => {
        let target = event.currentTarget;
        setPeople(prevState => { 
            return { people: [...prevState.people.map(p => { return p.id === id ? {...p, age: p.age + 1} : p })] }
        })
    }

    const nameChangedHandler = (event, id) => {
        let target = event.currentTarget;
        setPeople(prevState => { 
            return { people: [...prevState.people.map(p => { return p.id === id ? {...p, name: target.value} : p })] }
        })
    }

    const [ viewPeople, setViewPeople ] = useState(false)

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
            <button onClick={() => setViewPeople(prevState => !prevState)} style={buttonStyle}>toggle view</button>
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
                    />)
            }
        </div>
    );
}

export default App;
