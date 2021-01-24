import React, { FC } from 'react';
import * as styles from './styles.scss';
import ExampleComponent from '~/components/ExampleComponent';

export const ExampleContainer: FC = () => {
  return (
    <div className={styles.container}>
      <ExampleComponent text="hello" />
    </div>
  );
};
