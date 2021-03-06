import { takeEvery, all, takeLatest } from 'redux-saga/effects'

import {
    AUTH_INITIATE_LOGOUT
    , AUTH_INITIATE_SIGN_IN_START
    , AUTH_INITIATE_SIGN_UP_START
    , AUTH_INITIATE_SIGN_IN
    , AUTH_INITIATE_SIGN_UP
    , AUTH_INITIATE_CHECK_STATE
    , AUTH_INITIATE_FETCH_USER
    , BB_INITIATE_FETCH_INGREDIENTS
    , ORDER_INITIATE_FETCH_ORDERS
    , ORDER_INITIATE_PURCHASE_ORDER
} from '../actionTypes/index'
import {
    logoutSaga
    , signinStartSaga
    , signupStartSaga
    , signinSaga
    , signupSaga
    , authCheckStateSaga
    , fetchUserDataSaga
} from './auth'
import { fetchIngredientsSaga } from './burgerBuilder'
import { purchaseOrderSaga, fetchOrdersSaga } from './order'

export function* watchAuth() {
    yield all([
        takeEvery(AUTH_INITIATE_LOGOUT, logoutSaga)
        , takeEvery(AUTH_INITIATE_SIGN_IN_START, signinStartSaga)
        , takeEvery(AUTH_INITIATE_SIGN_UP_START, signupStartSaga)
        , takeEvery(AUTH_INITIATE_SIGN_IN, signinSaga)
        , takeEvery(AUTH_INITIATE_SIGN_UP, signupSaga)
        , takeEvery(AUTH_INITIATE_CHECK_STATE, authCheckStateSaga)
        , takeEvery(AUTH_INITIATE_FETCH_USER, fetchUserDataSaga)
    ])
}

export function* watchBurgerBuilder() {
    yield takeEvery(BB_INITIATE_FETCH_INGREDIENTS, fetchIngredientsSaga)

    // cancells current and runs only latest
    // yield takeLatest(BB_INITIATE_FETCH_INGREDIENTS, fetchIngredientsSaga)
}

export function* watchOrder() {
    yield takeEvery(ORDER_INITIATE_FETCH_ORDERS, fetchOrdersSaga)
    yield takeEvery(ORDER_INITIATE_PURCHASE_ORDER, purchaseOrderSaga)
}