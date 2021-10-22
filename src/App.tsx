import * as Sentry from '@sentry/react';
import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';

import { store, persistor, history } from './redux/store';
import ExampleContainer from './containers/ExampleContainer';
import { initSentry } from './services/sentry';

require('./styles/reset.scss');
require('./styles/global.scss');

initSentry();

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Route exact path="/" component={ExampleContainer} />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

export default Sentry.withProfiler(App);
