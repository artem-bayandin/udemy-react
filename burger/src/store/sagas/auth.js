import { put, delay } from 'redux-saga/effects'

import axios from 'axios'

import {
    signupStartSucceeded
    , logoutSucceeded
    , signinStartSucceeded
    , signinStart
    , signinSucceeded
    , signinFailed
    , signupStart
    , signupSucceeded
    , signupFailed
    , fetchUserData
    , logout
    , setUserData
 } from '../actions/index'

export function* logoutSaga(action) {
    yield clearUserInLocalStorage()
    // yield put({
    //     type: LOGOUT // we can also use actionCreators here as we do it somewhere else
    // })

    // just for tests
    yield delay(100) // executes next in a delay ms
    yield put(logoutSucceeded())
}

export function* signupStartSaga(action) {
    yield clearUserInLocalStorage()
    yield put(signupStartSucceeded())
}

export function* signinStartSaga(action) {
    yield clearUserInLocalStorage()
    yield put(signinStartSucceeded())
}

export function* signinSaga(action) {
    yield put(signinStart())
    try {
        const response = yield axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAdpyGsZ47DX-uOkYUJzKWzJ0phG1wIcaM', {
            email: action.payload.email,
            password: action.payload.pass,
            returnSecureToken: true
        })
        yield setLocalStorageTokenAndExpiration(
            response.data.localId,
            response.data.idToken,
            +response.data.expiresIn
        )
        yield put(signinSucceeded({
            token: response.data.idToken,
            userId: response.data.localId,
            expiresIn: +response.data.expiresIn,
            created: new Date(),
            email: response.data.email
        }))
    } catch (err) {
        yield put(signinFailed(err.response.data.error)) // todo
    }
}

export function* signupSaga(action) {
    yield put(signupStart())
    try {
        const response = axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAdpyGsZ47DX-uOkYUJzKWzJ0phG1wIcaM', {
            email: action.payload.email,
            password: action.payload.pass,
            returnSecureToken: true
        })
        yield setLocalStorageTokenAndExpiration(
            response.data.localId,
            response.data.idToken,
            +response.data.expiresIn
        )
        yield put(signupSucceeded({
            token: response.data.idToken,
            userId: response.data.localId,
            expiresIn: +response.data.expiresIn,
            created: new Date(),
            email: response.data.email
        }))
    } catch (err) {
        yield put(signupFailed(err.response.data.error))
    }
}

export function* authCheckStateSaga(action) {
    const user = yield getUserFromLocalStorage()
    if (user) {
        yield put(fetchUserData(user))
    } else {
        yield put(logout())
    }
}

export function* fetchUserDataSaga(action) {
    const url = yield 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAdpyGsZ47DX-uOkYUJzKWzJ0phG1wIcaM'
    try {
        const response = yield axios.post(url, { idToken: action.payload.token })
        yield put(setUserData(response.data.users[0]))
        yield put(signinSucceeded(action.payload))
    } catch (err) {
        yield put(logout())
    }
}


const clearUserInLocalStorage = () => {
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
    localStorage.removeItem('expiresIn')
    localStorage.removeItem('created')
}

const setLocalStorageTokenAndExpiration = (userId, token, expiresIn) => {
    localStorage.setItem('userId', userId)
    localStorage.setItem('token', token)
    localStorage.setItem('expiresIn', expiresIn)
    localStorage.setItem('created', new Date())
}

const getUserFromLocalStorage = () => {
    const userId = localStorage.getItem('userId')
    const token = localStorage.getItem('token')
    const expiresIn = localStorage.getItem('expiresIn')
    const created = localStorage.getItem('created')
    if (userId && token && expiresIn && created) {
        let expirationDate = new Date(created)
        expirationDate.setTime(expirationDate.getTime() + expiresIn * 1000)
        if (expirationDate > new Date()) {
            return {
                userId,
                token,
                expiresIn,
                created: new Date(created)
            }
        }
    }
    return null
}