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
import { updateObject } from '../utility'

const initialState = {
    loading: false,
    token: null,
    userId: null,
    error: null,
    loggedInDate: null,
    expiresIn: null,
    email: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_START:
            return updateObject(state, {
                ...initialState,
                loading: true
            })
        case SIGN_UP_SUCCESS:
            console.log('[Auth Reducer] sign UP token', action.payload)
            return updateObject(state, { 
                loading: false, 
                token: action.payload.token, 
                userId: action.payload.userId,
                loggedInDate: action.payload.created,
                expiresIn: action.payload.expiresIn
            })
        case SIGN_UP_FAILED:
            console.warn('[Auth Reducer] sign UP failed', action.payload)
            return updateObject(state, { 
                loading: false, 
                error: action.payload 
            })
        case SIGN_IN_START: 
            return updateObject(state, { 
                ...initialState,
                loading: true
            })
        case SIGN_IN_SUCCESS:
            console.log('[Auth Reducer] sign IN token', action.payload)
            return updateObject(state, { 
                loading: false, 
                token: action.payload.token, 
                userId: action.payload.userId,
                loggedInDate: action.payload.created,
                expiresIn: action.payload.expiresIn
            })
        case SIGN_IN_FAILED:
            console.warn('[Auth Reducer] sign IN failed', action.payload)
            return updateObject(state, { 
                loading: false, 
                error: action.payload 
            })
        case LOGOUT:
            return updateObject(state, {
                token: null,
                userId: null,
                loggedInDate: null,
                expiresIn: null
            })
        case SET_USER_DATA: {
            // imitate that we got some data from backend and set it into redux
            // for now - "email" is ehough
            // console.log(action.payload)
            return updateObject(state, { email: action.payload.email })
        }        
        default:
            return state
    }
}

export default authReducer