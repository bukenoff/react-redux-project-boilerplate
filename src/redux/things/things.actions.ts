import { createAction } from '@reduxjs/toolkit';
import { Thing } from './things.types';

export const addThing = createAction('ADD_THING', (thing: Thing) => ({
  payload: {
    thing,
  },
}));
