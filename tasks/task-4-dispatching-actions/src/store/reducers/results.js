import { STORE, DELETE, DELETE_ITEM } from '../actionTypes/results'

import updateObject from '../utility'

const initialState = {
    history: []
}

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE:
            return updateObject(state, { history: [...state.history, { id: new Date(), value: action.payload } ] })
            // return {
            //     ...state,
            //     history: [...state.history, { id: new Date(), value: action.payload } ]
            // }
        case DELETE:
            return updateObject(state, { history: state.history.length ? [...state.history].slice(0, state.history.length - 1) : [...state.history] })
            // return {
            //     ...state,
            //     history: state.history.length ? [...state.history].slice(0, state.history.length - 1) : [...state.history]
            // }
        case DELETE_ITEM:
            return updateObject(state, { history: [...state.history].filter(item => item.id !== action.payload.id) })
            // return {
            //     ...state,
            //     history: [...state.history].filter(item => item.id !== action.payload.id)
            // }
    }
    return state
}

export default resultsReducer