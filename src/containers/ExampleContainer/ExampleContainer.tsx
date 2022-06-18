import React, { FC } from 'react';
import { connect } from 'react-redux';
import { useTranslation, Trans } from 'react-i18next';

import { State } from '~/types';
import * as actions from '~/redux/things/things.actions';

import ExampleComponent from '~/components/ExampleComponent';

const mapStateToProps = ({ things }: State) => ({
  things_list: things.things_list,
});

const mapDispatchToProps = {
  addThing: actions.addThing,
};

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {};

const ExampleContainer: FC<Props> = ({ things_list, addThing }) => {
  const { t } = useTranslation();

  return (
    <div>
      <ExampleComponent text={t('exampleContainer.wellcomeText')} />
    </div>
  );
};

export const ExampleContainerConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExampleContainer);
