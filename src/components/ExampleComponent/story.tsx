import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { ExampleComponent } from './ExampleComponent.tsx';

storiesOf('ExampleComponent', module)
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ExampleComponent text={text('text', 'hi')} />
  ));
