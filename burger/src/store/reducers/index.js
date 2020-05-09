import { combineReducers } from 'redux'

import orderReducer from './ingredient'

const reducer = combineReducers({
    order: orderReducer
})

export default reducer