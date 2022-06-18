import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import things_reducer from './things/things.reducers';
// import moduleNameReducer from './module_folder_name/reducers';

const thingsPersistConfig = {
  key: 'thisngs_list',
  storage,
};

const rootReducer = combineReducers({
  things: persistReducer(thingsPersistConfig, things_reducer),
  // moduleName: moduleNameReducer,
});

export default rootReducer;
