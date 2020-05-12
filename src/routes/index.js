import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';

import Brasil from '~/pages/Brasil';
import World from '~/pages/World';
import About from '~/pages/About';

export default function Routes() {
  return (
    <Switch>
      <Route path="/brasil" exact component={Brasil} />
      <Route path="/mundo" exact component={World} />
      <Route path="/sobre" exact component={About} />
      <Redirect from="*" to="/brasil" />
    </Switch>
  );
}
