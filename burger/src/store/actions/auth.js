import {
    SIGN_UP_START
    , SIGN_UP_SUCCESS
    , SIGN_UP_FAILED
    , SIGN_IN_START
    , SIGN_IN_SUCCESS
    , SIGN_IN_FAILED
    , LOGOUT
    , SET_USER_DATA
} from '../actionTypes/auth'

import axios from 'axios'

export const signupStart = () => {
    clearUserInLocalStorage()
    return {
        type: SIGN_UP_START
    }
}

export const signupSucceeded = userData => {
    return {
        type: SIGN_UP_SUCCESS,
        payload: userData
    }
}

export const signupFailed = err => {
    return {
        type: SIGN_UP_FAILED,
        payload: err
    }
}

export const signup = (email, pass) => {
    return dispatch => {
        dispatch(signupStart())
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAdpyGsZ47DX-uOkYUJzKWzJ0phG1wIcaM', {
            email,
            password: pass,
            returnSecureToken: true
        })
        .then(resp => {
            setLocalStorageTokenAndExpiration(
                resp.data.localId,
                resp.data.idToken,
                +resp.data.expiresIn
            )
            dispatch(signupSucceeded({
                token: resp.data.idToken,
                userId: resp.data.localId,
                expiresIn: +resp.data.expiresIn,
                created: new Date()
            }))
        })
        .catch(err => {
            dispatch(signinFailed(err.response.data.error))
        })
    }
}

export const signinStart = () => {
    clearUserInLocalStorage()
    return {
        type: SIGN_IN_START
    }
}

export const signinSucceeded = userData => {
    return {
        type: SIGN_IN_SUCCESS,
        payload: userData
    }
}

export const signinFailed = err => {
    return {
        type: SIGN_IN_FAILED,
        payload: err
    }
}

export const signin = (email, pass) => {
    return dispatch => {
        dispatch(signinStart())
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAdpyGsZ47DX-uOkYUJzKWzJ0phG1wIcaM', {
            email,
            password: pass,
            returnSecureToken: true
        })
        .then(resp => {
            setLocalStorageTokenAndExpiration(
                resp.data.localId,
                resp.data.idToken,
                +resp.data.expiresIn
            )
            dispatch(signinSucceeded({
                token: resp.data.idToken,
                userId: resp.data.localId,
                expiresIn: +resp.data.expiresIn,
                created: new Date()
            }))
        })
        .catch(err => {
            dispatch(signinFailed(err.response.data.error))
        })
    }
}

export const logout = () => {
    clearUserInLocalStorage()
    return {
        type: LOGOUT
    }
}

export const setUserData = (userData) => {
    return {
        type: SET_USER_DATA,
        payload: userData
    }
}

export const fetchUserData = (userFromLocalStorage) => {
    return dispatch => {
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAdpyGsZ47DX-uOkYUJzKWzJ0phG1wIcaM'
        axios.post(url, { idToken: userFromLocalStorage.token })
            .then(resp => {
                dispatch(setUserData(resp.data.users[0]))
                dispatch(signinSucceeded(userFromLocalStorage))
            })
            .catch(err => {
                dispatch(logout())
            })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const user = getUserFromLocalStorage()
        if (user) {
            dispatch(fetchUserData(user))            
        } else {
            dispatch(logout())
        }
    }
}

const setLocalStorageTokenAndExpiration = (userId, token, expiresIn) => {
    localStorage.setItem('userId', userId)
    localStorage.setItem('token', token)
    localStorage.setItem('expiresIn', expiresIn)
    localStorage.setItem('created', new Date())
}

const clearUserInLocalStorage = () => {
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
    localStorage.removeItem('expiresIn')
    localStorage.removeItem('created')
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