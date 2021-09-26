import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EntriesContainer from '../../containers/EntriesContainer';
import EntryContainer from '../../containers/EntryContainer';

export default function App() {
  return (
    <Switch>
      <Route>
        <EntriesContainer exact path="/" />
      </Route>
      <Route>
        <EntryContainer exact path="/1" />
      </Route>
    </Switch>);
}
