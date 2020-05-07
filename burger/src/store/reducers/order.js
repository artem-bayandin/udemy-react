import { ADD_INGREDIENT, REM_INGREDIENT, CLEAR_ORDER } from '../actionTypes/order'

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 0
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
}

const updatePrice = (newIngredients) => {
    return updateSinglePrice(newIngredients, 'salad') +
           updateSinglePrice(newIngredients, 'bacon') +
           updateSinglePrice(newIngredients, 'cheese') +
           updateSinglePrice(newIngredients, 'meat')
}

const updateSinglePrice = (arr, name) => arr[name] * INGREDIENT_PRICES[name]

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            const newIngredients = {
                ...state.ingredients,
                [action.payload.name]: state.ingredients[action.payload.name] + 1
            }
            return {
                ...state,
                ingredients: newIngredients,
                totalPrice: updatePrice(newIngredients)
            }
        }
        case REM_INGREDIENT: {
            const newValue = state.ingredients[action.payload.name] > 0
                ? state.ingredients[action.payload.name] - 1
                : 0
            const newIngredients = {
                ...state.ingredients,
                [action.payload.name]: newValue
            }
            return {
                ...state,
                ingredients: newIngredients,
                totalPrice: updatePrice(newIngredients)
            }
        }
        case CLEAR_ORDER: {
            return {
                ...state,
                ingredients: {...initialState.ingredients},
                totalPrice: 0
            }
        }
        default: 
            return state
    }
}

export default orderReducer