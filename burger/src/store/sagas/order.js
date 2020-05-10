import { put } from 'redux-saga/effects'

import axios from '../../axios-orders-firebase'

import {
    purchaseOrderStart
    , purchaseOrderSuccess
    , purchaseOrderFailed
    , fetchOrdersStart
    , fetchOrdersSuccess
    , fetchOrdersFailed
 } from '../actions/index'

export function* purchaseOrderSaga(action) {
    yield put(purchaseOrderStart())
    const tknStr = yield (action.payload.token
        ? '?auth=' + action.payload.token
        : '')
    const url = yield '/orders.json' + tknStr
    try {
        const response = yield axios.post(url, action.payload.order)
        yield put(purchaseOrderSuccess(response.data.name, { ...response.data }))
    } catch (err) {
        yield put(purchaseOrderFailed(err))
    }
}

export function* fetchOrdersSaga(action) {
    yield put(fetchOrdersStart())
    const queryParams = yield (action.payload.token
            ? '?auth=' + action.payload.token + '&orderBy="userId"&equalTo="' + action.payload.userId + '"'
            : '')
    const url = yield '/orders.json' + queryParams
    try {
        const response = yield axios.get(url)
        const orders = yield Object.keys(response.data).map(key => {
            return {
                ...response.data[key],
                id: response.data[key].name
            }
        })
        yield put(fetchOrdersSuccess(orders))
    } catch (err) {
        yield put(fetchOrdersFailed(err))
    }
}