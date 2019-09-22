import { ThingsState } from './redux/things/types';
// import { OtherModuleState } from './redux/other_module/types';

export type Handler<P, T> = (
  state: P,
  payload: T extends (...args: any[]) => infer R ? R : any,
) => P

export type State = Readonly<{
  things: ThingsState;
  // other_module: OtherModuleState;
}>
