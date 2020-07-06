import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';

import Brasil from '~/pages/Brasil';
import World from '~/pages/World';
import About from '~/pages/About';
import Cities from '~/pages/Cities';

export default function Routes() {
  return (
    <Switch>
      <Route path="/brasil" exact component={Brasil} />
      <Route path="/mundo" exact component={World} />
      <Route path="/sobre" exact component={About} />
      <Route path="/cidades" exact component={Cities} />
      <Redirect from="*" to="/brasil" />
    </Switch>
  );
}
