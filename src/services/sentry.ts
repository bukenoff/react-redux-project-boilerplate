import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

export const initSentry = (): void => {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: Number(process.env.REACT_APP_SENTRY_TRACES_SAMPLE_RATE),
    environment: process.env.REACT_APP_SENTRY_ENVIRONMENT,
  });
};
