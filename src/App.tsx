import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import ExampleContainer from './containers/ExampleContainer';

require('./styles/reset.scss');
require('./styles/global.scss');

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path="/" component={ExampleContainer} />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
