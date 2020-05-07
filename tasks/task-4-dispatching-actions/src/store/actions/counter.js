import { INCREMENT, DECREMENT, ADD, SUB } from '../actionTypes/counter'


export const increment = () => {
    return {
        type: INCREMENT
    }
}
export const incrementAsync = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment())
        }, 2000)
    }
}


export const decrement = () => {
    return {
        type: DECREMENT
    }
}
export const decrementAsync = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(decrement())
        }, 2000)
    }
}


export const add = (value) => {
    return {
        type: ADD,
        payload: value
    }
}
export const addAsync = (value) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(add(value))
        }, 2000)
    }
}


export const sub = (value) => {
    return {
        type: SUB,
        payload: value
    }
}
export const subAsync = (value) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(sub(value))
        }, 2000)
    }
}