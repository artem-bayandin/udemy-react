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


export const store = (value) => {
    return {
        type: STORE,
        payload: value
    }
}
export const storeAsync = (value) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(store(value))
        }, 2000)
    }
}


export const del = () => {
    return {
        type: DELETE
    }
}
export const delAsync = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(del())
        }, 2000)
    }
}


export const delItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: {id}
    }
}
export const delItemAsync = (id) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(delItem(id))
        }, 2000)
    }
}
