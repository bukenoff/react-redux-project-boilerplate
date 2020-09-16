import { createReducer } from '@reduxjs/toolkit';
import { ThingsState } from './types';
import { ThingsActions, ThingsHandler } from '~/types';
import * as actions from './actions';

const initialState: ThingsState = {
  things_list: [],
};

const addThingHanlder: ThingsHandler<typeof actions.addThing> = (
  state,
  { payload: { thing }},
) => {
  state.things_list.push(thing);
};

export const HANDLERS = {
  [ThingsActions.ADD_THING]: addThingHanlder,
};

export default createReducer(initialState, HANDLERS);
