import { ACTION_TYPES as TYPES } from './constants';
import { IThing } from './types';

export const addThing = (thing: IThing) => ({
  type: TYPES.ADD_THING,
  thing,
});

