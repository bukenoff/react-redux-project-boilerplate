import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

/* eslint-disable */
const composeEnhancers = typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose
/* eslint-enable */

const store = createStore(
  rootReducer(),
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
