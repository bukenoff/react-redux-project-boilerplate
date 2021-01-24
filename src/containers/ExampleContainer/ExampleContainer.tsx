import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import * as styles from './styles.scss';
import ExampleComponent from '~/components/ExampleComponent';
import { useStores } from '~/stores/stores.provider';

export const ExampleContainer: FC = observer(() => {
  const { things_store } = useStores();
  const { addThing } = things_store;

  return (
    <div className={styles.container}>
      <ExampleComponent text="hello" addThing={addThing} />
    </div>
  );
});
