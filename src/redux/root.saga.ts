import { fork } from 'redux-saga/effects';
import things_sagas from './things/things.sagas';

export default function* rootSaga() {
  yield fork(things_sagas);
  // yield fork(other flow);
}
