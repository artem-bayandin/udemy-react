import {
    ADD_INGREDIENT
    , REM_INGREDIENT
    , CLEAR_ORDER
    , SET_INGREDIENTS
    , FETCH_INGREDIENTS_FAILED
} from '../actionTypes/burgerBuilder'

import { updateObject } from '../utility'

const initialState = {
    ingredients: null,
    totalPrice: 0,
    error: false
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

const burgerBuilderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            const newIngredients = updateObject(state.ingredients, {
                [action.payload.name]: state.ingredients[action.payload.name] + 1
            })
            return updateObject(state, {
                ingredients: newIngredients,
                totalPrice: updatePrice(newIngredients)
            })
        }
        case REM_INGREDIENT: {
            const newValue = state.ingredients[action.payload.name] > 0
                ? state.ingredients[action.payload.name] - 1
                : 0
            const newIngredients = updateObject(state.ingredients, {
                [action.payload.name]: newValue
            })
            return updateObject(state, {
                ingredients: newIngredients,
                totalPrice: updatePrice(newIngredients)
            })
        }
        case CLEAR_ORDER: {
            return updateObject(state, {
                ingredients: {...initialState.ingredients},
                totalPrice: 0
            })
        }
        case SET_INGREDIENTS: {
            return updateObject(state, {
                ingredients: {
                    salad: action.payload.salad,
                    bacon: action.payload.bacon,
                    cheese: action.payload.cheese,
                    meat: action.payload.meat
                },
                totalPrice: updatePrice(action.payload),
                error: false
            })
        }
        case FETCH_INGREDIENTS_FAILED: {
            return updateObject(state, {
                error: true
            })
        }
        default: 
            return state
    }
}

export default burgerBuilderReducer