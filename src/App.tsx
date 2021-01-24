import React, { FC } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ExampleContainer from './containers/ExampleContainer';

require('./styles/reset.scss');
require('./styles/global.scss');

const App: FC = () => {
  return (
    <Router>
      <Route exact path="/" component={ExampleContainer} />
    </Router>
  );
};

export default App;
