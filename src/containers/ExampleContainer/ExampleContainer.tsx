import React, { FC } from 'react';
import { connect } from 'react-redux';
import { State } from '~/types';
import * as styles from './styles.scss';
import * as actions from '~/redux/things/actions';

import ExampleComponent from '~/components/ExampleComponent';

const mapStateToProps = ({ things }: State) => ({
  things_list: things.things_list,
});

const mapDispatchToProps = {
  addThing: actions.addThing,
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {};

const ExampleContainer: FC<Props> = ({
  things_list,
  addThing,
}) => {
  return (
    <div className={styles.container}>
      <ExampleComponent text="hello" />
    </div>
  );
};

export const ExampleContainerConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExampleContainer);
