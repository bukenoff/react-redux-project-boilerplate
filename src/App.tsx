import React, { FC } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ExampleContainer from './containers/ExampleContainer';
import { StoresProvider } from './stores/stores.provider';

require('./styles/reset.scss');
require('./styles/global.scss');

const App: FC = () => {
  return (
    <StoresProvider>
      <Router>
        <Route exact path="/" component={ExampleContainer} />
      </Router>
    </StoresProvider>
  );
};

export default App;
