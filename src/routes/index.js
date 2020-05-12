import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Brasil from '~/pages/Brasil';

export default function Routes() {
  return (
    <Switch>
      <Route path="/brasil" component={Brasil} />
    </Switch>
  );
}
