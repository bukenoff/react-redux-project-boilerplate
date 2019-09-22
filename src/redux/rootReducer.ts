import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thingsReducer from './things/reducers';
// import moduleNameReducer from './module_folder_name/reducers';

const thingsPersistConfig = {
  key: 'auth',
  storage,
}

const rootReducer = () => combineReducers({
  things: persistReducer(thingsPersistConfig, thingsReducer),
  // moduleName: moduleNameReducer,
});

export default rootReducer;
