import * as React from 'react';
import { routes } from './routes';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { EntryListScene } from 'scenes';

export const RouterComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[routes.root, routes.entries]}
          component={EntryListScene}
        />
      </Switch>
    </HashRouter>
  );
};
