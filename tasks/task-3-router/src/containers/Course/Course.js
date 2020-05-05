import React, { useEffect, useState } from 'react'

import queryString from 'query-string'

const Course = (props) => {
    const [state, setState] = useState({id: null, title: null, show: false})

    useEffect(() => {
        const newState = {id: null, title: null, show: false}
        if (props.match) {
            newState.id = props.match.params.id
        }
        if (props.location) {
            newState.title = queryString.parse(props.location.search).title ?? ''
        }
        newState.show = newState.id && newState.title
        setState(newState)
    }, [props])

    return (
        state.show &&
        <div>
            <h1>{state.title}</h1>
            <p>You selected the Course with ID: {state.id}</p>
        </div>
    )
}

export default Course