import { getType } from '@reduxjs/toolkit';
import { takeLatest, put } from 'redux-saga/effects';
import { addThing } from './things.actions';

function* addThingSaga({ payload: { thing } }: ReturnType<typeof addThing>) {
  console.log('saga is triggered');
  console.log(`here is the thing ${thing}`);
  yield put({ type: 'SOME_REACTION_TO_ACTION' });
}

export default function* thingsFlow() {
  yield takeLatest(getType(addThing), addThingSaga);
}
