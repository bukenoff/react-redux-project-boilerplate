import * as Sentry from '@sentry/react';
import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import ExampleContainer from './containers/ExampleContainer';
import { initSentry } from './services/sentry';
import './i18n';

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ExampleContainer />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default Sentry.withProfiler(App);
