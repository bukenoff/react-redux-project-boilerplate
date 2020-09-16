export interface Thing {
  id: number;
  name: string;
}

export type ThingsState = Readonly<{
  things_list: Thing[];
}>
