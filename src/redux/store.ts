import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import root_saga from './root.saga';
import root_reducer from './root.reducer';

const initial_state = {};
const saga_middleware = createSagaMiddleware();
const history = createBrowserHistory();

/* eslint-disable */
const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

const store = createStore(
  root_reducer(history),
  initial_state,
  composeEnhancers(applyMiddleware(saga_middleware, routerMiddleware(history))),
);

const persistor = persistStore(store);

saga_middleware.run(root_saga);

export { store, persistor, history };
