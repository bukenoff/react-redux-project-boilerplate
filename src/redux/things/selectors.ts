import { State } from '~/types';
import { ThingsState } from './types';

const selectThingsList = (state: State): ThingsState['things_list'] => {
  return state.things.things_list;
};

export { selectThingsList };
