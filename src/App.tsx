import * as Sentry from '@sentry/react';
import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';

import { store, persistor, history } from './redux/store';
import ExampleContainer from './containers/ExampleContainer';
import { initSentry } from './services/sentry';
import './i18n';

import './styles/reset.scss';
import './styles/global.scss';
import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
};

initSentry();

const App: FC = () => {
  const { i18n } = useTranslation();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <div>
            {Object.keys(lngs).map((lng) => (
              <button
                key={lng}
                style={{
                  fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
                }}
                type="submit"
                onClick={() => {
                  i18n.changeLanguage(lng);
                }}
              >
                {lngs[lng as 'en' | 'de'].nativeName}
              </button>
            ))}
          </div>
          <Route exact path="/" component={ExampleContainer} />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

export default Sentry.withProfiler(App);
