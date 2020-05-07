export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD = 'ADD'
export const SUB = 'SUB'
export const STORE = 'STORE'
export const DELETE = 'DELETE'
export const DELETE_ITEM = 'DELETE_ITEM'

// actionCreators
export const increment = () => {
    return {
        type: INCREMENT
    }
}
export const decrement = () => {
    return {
        type: DECREMENT
    }
}
export const add = (value) => {
    return {
        type: ADD,
        payload: value
    }
}
export const sub = (value) => {
    return {
        type: SUB,
        payload: value
    }
}
export const store = (value) => {
    return {
        type: STORE,
        payload: value
    }
}
export const del = () => {
    return {
        type: DELETE
    }
}
export const delItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: {id}
    }
}