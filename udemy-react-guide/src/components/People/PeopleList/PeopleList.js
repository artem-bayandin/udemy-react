import React from 'react'

import Person from '../Person/Person'

const PeopleList = props => props.people.map(item =>
    <Person
        key={item.id}
        id={item.id}
        name={item.name}
        age={item.age}
        makeOlder={(ev) => props.makeOneOlderHandler(ev, item.id)}
        nameChanged={(ev) => props.nameChangedHandler(ev, item.id)}
        click={() => props.deletePersonById(item.id)}
    />)

export default PeopleList