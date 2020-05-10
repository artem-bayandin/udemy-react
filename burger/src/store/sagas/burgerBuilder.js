import { put } from 'redux-saga/effects'

import axios from '../../axios-orders-firebase'

import {
    setIngredients
    , fetchIngredientsFailed
 } from '../actions/index'

export function* fetchIngredientsSaga(action) {
    try {
        const response = yield axios.get('/ingredients.json')
        yield put(setIngredients(response.data))
    } catch (err) {
        yield put(fetchIngredientsFailed())
    }
}