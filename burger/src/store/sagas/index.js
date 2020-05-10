import { takeEvery } from 'redux-saga/effects'

import {
    AUTH_INITIATE_LOGOUT
    , AUTH_INITIATE_SIGN_IN_START
    , AUTH_INITIATE_SIGN_UP_START
    , AUTH_INITIATE_SIGN_IN
    , AUTH_INITIATE_SIGN_UP
    , AUTH_INITIATE_CHECK_STATE
    , AUTH_INITIATE_FETCH_USER,
    BB_INITIATE_FETCH_INGREDIENTS
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

export function* watchAuth() {
    yield takeEvery(AUTH_INITIATE_LOGOUT, logoutSaga)
    yield takeEvery(AUTH_INITIATE_SIGN_IN_START, signinStartSaga)
    yield takeEvery(AUTH_INITIATE_SIGN_UP_START, signupStartSaga)
    yield takeEvery(AUTH_INITIATE_SIGN_IN, signinSaga)
    yield takeEvery(AUTH_INITIATE_SIGN_UP, signupSaga)
    yield takeEvery(AUTH_INITIATE_CHECK_STATE, authCheckStateSaga)
    yield takeEvery(AUTH_INITIATE_FETCH_USER, fetchUserDataSaga)
}

export function* watchBurgerBuilder() {
    yield takeEvery(BB_INITIATE_FETCH_INGREDIENTS, fetchIngredientsSaga)
}