import {
    PURCHASE_ORDER_SUCCESS
    , PURCHASE_ORDER_FAILED
    , PURCHASE_ORDER_START
    , PURCHASE_INIT
    , FETCH_ORDERS_START
    , FETCH_ORDERS_SUCCESS
    , FETCH_ORDERS_FAILED
    , FETCH_ORDERS_INIT
    , ORDER_INITIATE_FETCH_ORDERS
    , ORDER_INITIATE_PURCHASE_ORDER
} from '../actionTypes/index'

export const purchaseInit = () => {
    return {
        type: PURCHASE_INIT
    }
}

export const purchaseOrderStart = () => {
    return {
        type: PURCHASE_ORDER_START
    }
}

export const purchaseOrderSuccess = (id, orderData) => {
    return {
        type: PURCHASE_ORDER_SUCCESS,
        payload: {
            id,
            orderData
        }
    }
}

export const purchaseOrderFailed = (err) => {
    return {
        type: PURCHASE_ORDER_FAILED,
        payload: { err }
    }
}

export const purchaseOrderAsync = (order, token) => {
    return {
        type: ORDER_INITIATE_PURCHASE_ORDER,
        payload: {
            order,
            token
        }
    }
}

export const fetchOrdersInit = () => {
    return {
        type: FETCH_ORDERS_INIT
    }
}

export const fetchOrdersStart = () => {
    return {
        type: FETCH_ORDERS_START
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: FETCH_ORDERS_SUCCESS,
        payload: orders
    }
}

export const fetchOrdersFailed = (err) => {
    return {
        type: FETCH_ORDERS_FAILED,
        payload: err
    }
}

export const fetchOrdersAsync = (token, userId) => {
    return {
        type: ORDER_INITIATE_FETCH_ORDERS,
        payload: {
            token,
            userId
        }
    }
}