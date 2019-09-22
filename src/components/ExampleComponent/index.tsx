import React, { FC } from 'react';
import * as styles from './styles.scss';

interface IProps {
  text: string;
}

const ExampleComponent: FC<IProps> = ({
  text,
}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export { ExampleComponent };
