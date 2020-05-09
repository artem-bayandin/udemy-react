import reducer from './auth'
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
import { updateObject } from '../../shared/utility'

describe('auth reduced', () => {
    const initialState = {
        loading: false,
        token: null,
        userId: null,
        error: null,
        loggedInDate: null,
        expiresIn: null,
        email: null
    }

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should store token upon login', () => {
        const payload = { 
            token: 'my-token', 
            userId: 'my-userId',
            created: new Date(),
            expiresIn: 3000
        }
        expect(reducer(initialState, {
            type: SIGN_IN_SUCCESS,
            payload
        })).toEqual(updateObject(initialState, {
            token: payload.token, 
            userId: payload.userId, 
            loading: false, 
            loggedInDate: payload.created,
            expiresIn: payload.expiresIn
        }))
    })
})