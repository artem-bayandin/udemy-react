import { useState, useEffect } from 'react'

let globalState = {}
let listeners = []
let actions = {}

export const useStore = () => {
    const [ , setState ] = useState(globalState)

    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload)
        globalState = { ...globalState, ...newState }
        console.log('useStore dispatch globalState', globalState)
        for (const listener of listeners) {
            listener(globalState)
            console.log('listener dispatched', globalState)
        }
    }

    useEffect(() => {
        listeners.push(setState)

        return () => {
            listeners = listeners.filter(item => item !== setState)
        }
    }, [])

    return [ globalState, dispatch ]
}

export const initStore = (userActions, initialState) => {
    if (initialState) {
        globalState = { ...globalState, ...initialState }
    }
    actions = { ...actions, ...userActions }
}