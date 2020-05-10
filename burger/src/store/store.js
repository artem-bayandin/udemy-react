import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import logger from './middlewares/logger'
import reducer from './reducers/index'

import {
    watchAuth
    , watchBurgerBuilder
    , watchOrder
} from './sagas/index'

console.log('[NODE_ENV]', process.env.NODE_ENV)

const sagaMiddleware = createSagaMiddleware()

let middleware = applyMiddleware(logger, thunk, sagaMiddleware)

if (process.env.NODE_ENV === 'development') {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    middleware = composeEnhancers(middleware)
}

const store = createStore(reducer, middleware);

sagaMiddleware.run(watchAuth)
sagaMiddleware.run(watchBurgerBuilder)
sagaMiddleware.run(watchOrder)

export default store