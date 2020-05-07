import { createStore } from 'redux'

const initialState = {
    counter: 0,
    history: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case 'SUB':
            return {
                ...state,
                counter: state.counter - action.payload
            }
        case 'STORE':
            const newHistory = [...state.history]
            newHistory.push({id: new Date(), value: state.counter})
            return {
                ...state,
                history: newHistory
            }
        case 'DELETE':
            return {
                ...state,
                history: state.history.length ? [...state.history].slice(0, state.history.length - 1) : [...state.history]
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                history: [...state.history].filter(item => item.id !== action.payload.id)
            }
    }
    return state
}

const store = createStore(reducer)

export default store