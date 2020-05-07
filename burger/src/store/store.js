import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import logger from './middlewares/logger'
import reducer from './reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(logger, thunk)));

export default store