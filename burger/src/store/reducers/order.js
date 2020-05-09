import { PURCHASE_ORDER_SUCCESS, PURCHASE_ORDER_FAILED, PURCHASE_ORDER_START, PURCHASE_INIT
    , FETCH_ORDERS_INIT, FETCH_ORDERS_START, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILED
} from "../actionTypes";

import { updateObject } from '../utility'

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case PURCHASE_INIT:
            return updateObject(state, {
                loading: false,
                purchased: false
            })
        case PURCHASE_ORDER_START:
            return updateObject(state, {
                loading: true
            })
        case PURCHASE_ORDER_SUCCESS:
            return updateObject(state, {
                loading: false,
                purchased: true,
                orders: state.orders.concat({...action.payload})
            })
        case PURCHASE_ORDER_FAILED:
            return updateObject(state, {
                loading: false
            })
        // case FETCH_ORDERS_INIT:
        //     return {
        //         ...state
        //     }
        case FETCH_ORDERS_START:
            return updateObject(state, {
                loading: true
            })
        case FETCH_ORDERS_SUCCESS:
            return updateObject(state, {
                loading: false,
                orders: action.payload
            })
        case FETCH_ORDERS_FAILED:
            return updateObject(state, {
                loading: false
            })
        default: return {...state}
    }
}

export default orderReducer