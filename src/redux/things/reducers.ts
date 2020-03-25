import { createReducer } from '@reduxjs/toolkit';
import { ACTION_TYPES as TYPES } from './constants';
import { ThingsState } from './types';
import { Handler } from '~/types';
import * as actions from './actions';

const initialState: ThingsState = {
  things_list: [],
};

const addThingHanlder: Handler<
ThingsState,
  typeof actions.addThing
> = (state, { thing }) => ({
  ...state,
  things_list: [...state.things_list, thing],
});

export const HANDLERS = {
  [TYPES.ADD_THING]: addThingHanlder,
}

export default createReducer(initialState, HANDLERS);
