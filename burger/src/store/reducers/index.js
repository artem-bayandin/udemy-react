import { combineReducers } from 'redux'

import burgerBuilderReducer from './burgerBuilder'
import orderReducer from './order'

const reducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer
})

export default reducer