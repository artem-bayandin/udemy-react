import {
    ADD_INGREDIENT
    , REM_INGREDIENT
    , CLEAR_ORDER
    , FETCH_INGREDIENTS_FAILED
    , SET_INGREDIENTS
    , BB_INITIATE_FETCH_INGREDIENTS
} from '../actionTypes/burgerBuilder'

export const addIngredient = (name) => {
    return {
        type: ADD_INGREDIENT,
        payload: {
            name
        }
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

export const clearOrder = () => {
    return {
        type: CLEAR_ORDER
    }
}

export const clearOrderAsync = () => { // this method is left here to show dispath in action
    return dispatch => {
        setTimeout(() => {
            dispatch(clearOrder())
        }, 500);
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
    return {
        type: BB_INITIATE_FETCH_INGREDIENTS
    }
}