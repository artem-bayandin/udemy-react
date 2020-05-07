import { combineReducers } from 'redux'

import orderReducer from './order'

const reducer = combineReducers({
    order: orderReducer
})

export default reducer