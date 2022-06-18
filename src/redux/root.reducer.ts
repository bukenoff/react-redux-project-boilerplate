import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';

import things_Reducer from './things/things.reducers';
// import moduleNameReducer from './module_folder_name/reducers';

const thingsPersistConfig = {
  key: 'auth',
  storage,
};

const rootReducer = (history: ReturnType<typeof createBrowserHistory>) =>
  combineReducers({
    things: persistReducer(thingsPersistConfig, things_Reducer),
    // moduleName: moduleNameReducer,
  });

export default rootReducer;
