import reducer from '../things.reducers';
import * as actions from '../things.actions';
import { ThingsState, Thing } from '../things.types';

describe('things reducer', () => {
  const initial_state: ThingsState = {
    things_list: [],
  };

  it('should return initial state', () => {
    expect(reducer(initial_state, { type: 'NO_TYPE' })).toEqual(initial_state);
  });

  it('should add new thing to thing_list', () => {
    const new_thing: Thing = {
      id: 0,
      name: 'name',
    };

    const result_state: ThingsState = {
      things_list: [new_thing],
    };

    expect(reducer(initial_state, actions.addThing(new_thing))).toEqual(
      result_state,
    );
  });
});
