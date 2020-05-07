import { INCREMENT, DECREMENT, ADD, SUB } from '../actionTypes/counter'

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case ADD:
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case SUB:
            return {
                ...state,
                counter: state.counter - action.payload
            }
    }
    return state
}

export default counterReducer