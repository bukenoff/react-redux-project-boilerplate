import { State } from '~/types';
import { ThingsState } from './things.types';

export const selectThingsList = (state: State): ThingsState['things_list'] => {
  return state.things.things_list;
};
