import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import combinedReducer from './combinedReducer'
import logger from './middleware/logger'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combinedReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(logger, thunk)));

// const store = createStore(combinedReducer, applyMiddleware(logger, thunk))

export default store