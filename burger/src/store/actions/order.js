import { ADD_INGREDIENT, REM_INGREDIENT, CLEAR_ORDER } from '../actionTypes/order'

const defaultTimeout = 500;

export const addIngredient = (name) => {
    return {
        type: ADD_INGREDIENT,
        payload: {
            name
        }
    }
}

export const addIngredientAsync = (name) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(addIngredient(name))
        }, defaultTimeout);
    }
}

export const removeIngredient = (name) => {
    return {
        type: REM_INGREDIENT,
        payload: {
            name
        }
    }
}

export const removeIngredientAsync = (name) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(removeIngredient(name))
        }, defaultTimeout);
    }
}

export const clearOrder = () => {
    return {
        type: CLEAR_ORDER
    }
}

export const clearOrderAsync = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(clearOrder())
        }, defaultTimeout);
    }
}