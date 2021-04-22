import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import { fetchMovies } from './movies/movies.sagas'

import rootReducer from './root-reducer'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchMovies)

const persistor = persistStore(store);

export  { store, persistor};
