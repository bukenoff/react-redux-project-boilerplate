import { createAction } from '@reduxjs/toolkit';
import { ThingsActions } from '~/types';
import { IThing } from './types';

export const addThing = createAction(
  ThingsActions.ADD_THING,
  (thing: IThing) => ({
    payload: {
      thing,
    },
  })
);

