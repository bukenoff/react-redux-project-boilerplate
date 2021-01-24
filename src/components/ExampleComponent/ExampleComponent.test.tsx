import React from 'react';
import { render } from '@testing-library/react';
import { ExampleComponent } from './ExampleComponent';
import { ThingsStoreInterface } from '~/stores/things.store';

test('renders without crash', () => {
  const { getByTestId } = render(
    <ExampleComponent
      text="hello world"
      addThing={jest.fn() as ThingsStoreInterface['addThing']}
    />,
  );
  const component = getByTestId('example-component');
  expect(component).toBeInTheDocument();
  expect(component.innerHTML).toBe('<h1>hello world</h1>');
});
