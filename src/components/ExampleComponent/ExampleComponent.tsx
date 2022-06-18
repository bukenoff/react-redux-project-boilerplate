import * as React from 'react';

export interface Props {
  text: string;
}

const ExampleComponent: React.FC<Props> = ({ text }) => {
  return (
    <div data-testid="example-component">
      <h1>{text}</h1>
    </div>
  );
};

export { ExampleComponent };
