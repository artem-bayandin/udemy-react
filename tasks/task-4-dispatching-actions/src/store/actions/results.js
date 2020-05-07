import { STORE, DELETE, DELETE_ITEM } from '../actionTypes/results'


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
