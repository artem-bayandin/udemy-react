import { createStore, applyMiddleware, compose } from 'redux'

import combinedReducer from './combinedReducer'
import logger from './middleware/logger'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combinedReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(logger)));

// const store = createStore(combinedReducer, applyMiddleware(logger))

export default store