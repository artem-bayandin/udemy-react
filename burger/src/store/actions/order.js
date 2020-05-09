import {
    PURCHASE_ORDER_SUCCESS
    , PURCHASE_ORDER_FAILED
    , PURCHASE_ORDER_START
    , PURCHASE_INIT,
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAILED,
    FETCH_ORDERS_INIT
} from '../actionTypes/index'

import axios from '../../axios-orders-firebase'

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

export const purchaseOrderAsync = (order) => {
    return dispatch => {
        dispatch(purchaseOrderStart())
        axios.post('/orders.json', order)
            .then(resp => {
                dispatch(purchaseOrderSuccess(resp.data.name, { ...resp.data }))
            })
            .catch(err => {
                dispatch(purchaseOrderFailed(err))
            })
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

export const fetchOrdersAsync = () => {
    return dispatch => {
        dispatch(fetchOrdersStart())
        axios.get('/orders.json')
            .then(resp => {
                const orders = Object.keys(resp.data).map(key => {
                    return {
                        ...resp.data[key],
                        id: resp.data[key].name
                    }
                })
                dispatch(fetchOrdersSuccess(orders))
            })
            .catch(err => {
                dispatch(fetchOrdersFailed(err))
            })
    }
}