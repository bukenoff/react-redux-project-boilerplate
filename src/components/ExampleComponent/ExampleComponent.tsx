import React, { FC } from 'react';
import { ThingsStoreInterface } from '~/stores/things.store';
import * as styles from './styles.scss';

interface Props {
  text: string;
  addThing: ThingsStoreInterface['addThing'];
}

const ExampleComponent: FC<Props> = ({ text }) => {
  return (
    <div data-testid="example-component" className={styles.container}>
      <h1>{text}</h1>
    </div>
  );
};

export { ExampleComponent, Props };
