import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import root_saga from './root.saga';
import root_reducer from './root.reducer';

const initial_state = {};
const saga_middleware = createSagaMiddleware();

const store = configureStore({
  reducer: root_reducer,
  middleware: [saga_middleware],
  preloadedState: initial_state,
});

const persistor = persistStore(store);

saga_middleware.run(root_saga);

export { store, persistor };
