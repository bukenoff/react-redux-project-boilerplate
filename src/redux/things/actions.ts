import { createAction } from '@reduxjs/toolkit';
import { ThingsActions } from '~/types';
import { Thing } from './types';

export const addThing = createAction(
  ThingsActions.ADD_THING,
  (thing: Thing) => ({
    payload: {
      thing,
    },
  })
);

