import { ThingsState } from './redux/things/types';
// import { OtherModuleState } from './redux/other_module/types';

export type ThingsHandler<T = undefined> = (
  state: ThingsState,
  payload: T extends (...args: any[]) => infer R ? R : any,
) => void | ThingsState

export interface State {
  things: ThingsState;
  // other_module: OtherModuleState;
}

export enum ThingsActions {
  ADD_THING = 'ADD_THING'
}
