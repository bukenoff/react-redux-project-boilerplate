import { createReducer } from '@reduxjs/toolkit';
import { ThingsState } from './types';
import { addThing } from './actions';

const initialState: ThingsState = {
  things_list: [],
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(addThing, (state, { payload }) => {
      state.things_list.push(payload.thing);
    })
    .addDefaultCase((state) => state);
});
