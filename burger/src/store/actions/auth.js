import {
    SIGN_UP_START
    , SIGN_UP_SUCCESS
    , SIGN_UP_FAILED
    , SIGN_IN_START
    , SIGN_IN_SUCCESS
    , SIGN_IN_FAILED
    , LOGOUT
    , SET_USER_DATA

    , AUTH_INITIATE_LOGOUT
    , AUTH_INITIATE_SIGN_UP_START
    , AUTH_INITIATE_SIGN_IN_START
    , AUTH_INITIATE_SIGN_IN
    , AUTH_INITIATE_SIGN_UP
    , AUTH_INITIATE_CHECK_STATE
    , AUTH_INITIATE_FETCH_USER
} from '../actionTypes/auth'

export const signupStart = () => {
    return {
        type: AUTH_INITIATE_SIGN_UP_START
    }
}

export const signupStartSucceeded = () => {
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
    return {
        type: AUTH_INITIATE_SIGN_UP,
        payload: {
            email,
            pass
        }
    }
}

export const signinStart = () => {
    return {
        type: AUTH_INITIATE_SIGN_IN_START
    }
}

export const signinStartSucceeded = () => {
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
    return {
        type: AUTH_INITIATE_SIGN_IN,
        payload: {
            email,
            pass
        }
    }
}

export const logout = () => {
    return {
        type: AUTH_INITIATE_LOGOUT
    }
}

export const logoutSucceeded = () => {
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
    return {
        type: AUTH_INITIATE_FETCH_USER,
        payload: userFromLocalStorage
    }
}

export const authCheckState = () => {
    return {
        type: AUTH_INITIATE_CHECK_STATE
    }
}