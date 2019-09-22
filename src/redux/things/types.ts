export interface IThing {
  id: number;
  name: string;
}

export type ThingsState = Readonly<{
  things_list: IThing[];
}>
