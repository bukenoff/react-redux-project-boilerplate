import { takeLatest } from 'redux-saga/effects';
import { ACTION_TYPES as TYPES } from './constants';
import * as actions from './actions';

function* addThingSaga({ thing }: ReturnType<typeof actions.addThing>) {
  console.log('saga is triggered');
  console.log(`here is the thing ${thing}`);
}

export default function* thingsFlow() {
  yield takeLatest(TYPES.ADD_THING, addThingSaga);
}
