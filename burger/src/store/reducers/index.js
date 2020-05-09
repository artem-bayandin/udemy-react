import { combineReducers } from 'redux'

import burgerBuilderReducer from './burgerBuilder'

const reducer = combineReducers({
    burgerBuilder: burgerBuilderReducer
})

export default reducer