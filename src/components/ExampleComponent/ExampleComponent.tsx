import React, { FC } from 'react';
import * as styles from './styles.scss';

interface Props {
  text: string;
}

const ExampleComponent: FC<Props> = ({ text }) => {
  return (
    <div data-testid="example-component" className={styles.container}>
      <h1>{text}</h1>
    </div>
  );
};

export { ExampleComponent, Props };
