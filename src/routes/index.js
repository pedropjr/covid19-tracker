import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Brasil from '~/pages/Brasil';

export default function Routes() {
  return (
    <Switch>
      <Route path="/brasil" component={Brasil} />
    </Switch>
  );
}
