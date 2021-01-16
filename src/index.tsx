/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

declare let module: { hot: any };

if (module.hot) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default;

    ReactDOM.render(<NewApp />, document.getElementById('root'));
  });
}
