import React, { useState } from 'react'
import styles from './App.module.css'
import PeopleList from '../../components/People/PeopleList/PeopleList'
import Cockpit from '../../components/Cockpit/Cockpit'
import MultipleAdjacentElements from '../../components/Custom/MultipleAdjacent/MultipleAdjacentElements'
import Auxilliary from '../../hoc/Auxilliary/Auxilliary'
import WithClass from '../../hoc/WithClass/WithClass'
import AuthContext from '../../context/auth-context'

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

    const [authenticated, setAuthenticated] = useState(false)

    const loginHandler = () => setAuthenticated(prevState => !prevState)

    return (
        <WithClass classes={styles.app}>
            <AuthContext.Provider value={{authenticated: authenticated, login: loginHandler}}>
                <Cockpit
                    title={props.title}
                    setPeople={() => setPeople(initialState)}
                    addAgeToAll={addAgeToAll}
                    setViewPeople={() => setViewPeople(prevState => !prevState)}
                    peopleCount={peopleState.people.length}
                    login={loginHandler}
                />
                {
                    viewPeople &&
                    <PeopleList
                        people={peopleState.people}
                        makeOneOlderHandler={makeOneOlderHandler}
                        nameChangedHandler={nameChangedHandler}
                        deletePersonById={deletePersonById}
                    />
                }
            </AuthContext.Provider>
            <div>
                <Auxilliary>
                    <MultipleAdjacentElements />
                </Auxilliary>
            </div>
        </WithClass>
    )
}

export default App
