import { createStore, combineReducers } from 'redux'

import counterReducer from './reducers/counterReducer'
import resultsReducer from './reducers/resultsReducer'

const reducer = combineReducers({
    counterSection: counterReducer,
    resultsSection: resultsReducer
})

const store = createStore(reducer)

export default store