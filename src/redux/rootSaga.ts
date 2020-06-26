import { fork } from 'redux-saga/effects';
import thingsFlow from './things/sagas';

export default function* rootSaga() {
  yield fork(thingsFlow);
  // yield fork(other flow);
}
