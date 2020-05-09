import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import logger from './middlewares/logger'
import reducer from './reducers/index'

console.log('[NODE_ENV]', process.env.NODE_ENV)

let middleware = applyMiddleware(logger, thunk)

if (process.env.NODE_ENV === 'development') {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    middleware = composeEnhancers(middleware)
}

const store = createStore(reducer, middleware);
export default store