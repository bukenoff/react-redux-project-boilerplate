import { takeLatest, put } from 'redux-saga/effects';
import { ThingsActions } from '~/types';
import * as actions from './actions';

function* addThingSaga({ payload: { thing }}: ReturnType<typeof actions.addThing>) {
  console.log('saga is triggered');
  console.log(`here is the thing ${thing}`);
  yield put({ type: 'SOME_REACTION_TO_ACTION' });
}

export default function* thingsFlow() {
  yield takeLatest(ThingsActions.ADD_THING, addThingSaga);
}
