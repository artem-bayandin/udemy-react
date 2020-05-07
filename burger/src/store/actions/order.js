import { ADD_INGREDIENT, REM_INGREDIENT, CLEAR_ORDER, FETCH_INGREDIENTS, FETCH_INGREDIENTS_FAILED, SET_INGREDIENTS } from '../actionTypes/order'
import axios from '../../axios-orders-firebase'

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

export const setIngredients = (data) => {
    return {
        type: SET_INGREDIENTS,
        payload: data
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: FETCH_INGREDIENTS_FAILED
    }
}

export const fetchIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
            .then(resp => dispatch(setIngredients(resp.data)))
            .catch(err => dispatch(fetchIngredientsFailed()))
    }
}