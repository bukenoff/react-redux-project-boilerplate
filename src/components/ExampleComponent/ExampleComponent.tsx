import * as React from 'react';
import * as styles from './styles.scss';

export interface Props {
  text: string;
}

const ExampleComponent: React.FC<Props> = ({ text }) => {
  return (
    <div data-testid="example-component" className={styles.container}>
      <h1>{text}</h1>
    </div>
  );
};

export { ExampleComponent };
