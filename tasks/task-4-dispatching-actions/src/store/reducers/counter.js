import { INCREMENT, DECREMENT, ADD, SUB } from '../actionTypes/counter'

import updateObject from '../utility'

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return updateObject(state, { counter: state.counter + 1 })
            // return {
            //     ...state,
            //     counter: state.counter + 1
            // }
        case DECREMENT:
            return updateObject(state, { counter: state.counter - 1 })
            // return {
            //     ...state,
            //     counter: state.counter - 1
            // }
        case ADD:
            return updateObject(state, { counter: state.counter + action.payload })
            // return {
            //     ...state,
            //     counter: state.counter + action.payload
            // }
        case SUB:
            return updateObject(state, { counter: state.counter - action.payload })
            // return {
            //     ...state,
            //     counter: state.counter - action.payload
            // }
    }
    return state
}

export default counterReducer