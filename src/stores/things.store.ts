import { action, observable, makeObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

interface IThing {
  id: string;
  title: string;
  description: string;
  isLiked: false;
  order: number;
}

export interface ThingsStoreInterface {
  things: Record<string, IThing>;
  addThing: (thing_draft: Pick<IThing, 'title' | 'description'>) => void;
  editThing: (
    thing_draft: Pick<IThing, 'id' | 'title' | 'description'>,
  ) => void;
  deleteThing: (id: IThing['id']) => void;
  getThingById: (id: IThing['id']) => IThing;
}

export class ThingsStore implements ThingsStoreInterface {
  constructor() {
    makeObservable(this);
  }

  @observable things: Record<string, IThing> = {};

  getThingById(id: IThing['id']): IThing {
    return this.things[id];
  }

  @action
  addThing = ({
    title,
    description,
  }: Pick<IThing, 'title' | 'description'>): void => {
    const new_thing: IThing = {
      id: uuidv4(),
      title,
      description,
      isLiked: false,
      order: Object.keys(this.things).length,
    };

    this.things[new_thing.id] = new_thing;
  };

  @action
  editThing = ({
    id,
    title,
    description,
  }: Pick<IThing, 'id' | 'title' | 'description'>): void => {
    const edited_thing = {
      ...this.things[id],
      title,
      description,
    };

    this.things[id] = edited_thing;
  };

  @action
  deleteThing = (id: IThing['id']): void => {
    delete this.things[id];
  };
}
