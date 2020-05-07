import { combineReducers } from 'redux'

import counterReducer from './reducers/counter'
import resultsReducer from './reducers/results'

const combinedReducer = combineReducers({
    counterSection: counterReducer,
    resultsSection: resultsReducer
})

export default combinedReducer