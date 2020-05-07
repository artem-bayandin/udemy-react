import * as actionTypes from '../actions/actions'

const initialState = {
    history: []
}

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE:
            const newHistory = [...state.history]
            newHistory.push({id: new Date(), value: action.payload})
            return {
                ...state,
                history: newHistory
            }
        case actionTypes.DELETE:
            return {
                ...state,
                history: state.history.length ? [...state.history].slice(0, state.history.length - 1) : [...state.history]
            }
        case actionTypes.DELETE_ITEM:
            return {
                ...state,
                history: [...state.history].filter(item => item.id !== action.payload.id)
            }
    }
    return state
}

export default resultsReducer