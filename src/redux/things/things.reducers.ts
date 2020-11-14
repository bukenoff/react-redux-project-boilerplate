import { createReducer } from '@reduxjs/toolkit';
import { ThingsState } from './things.types';
import { addThing } from './things.actions';

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
