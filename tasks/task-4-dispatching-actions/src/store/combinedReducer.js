import { combineReducers } from 'redux'

import counterReducer from './reducers/counterReducer'
import resultsReducer from './reducers/resultsReducer'

const combinedReducer = combineReducers({
    counterSection: counterReducer,
    resultsSection: resultsReducer
})

export default combinedReducer