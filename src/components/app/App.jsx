import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EntriesContainer from '../../containers/EntriesContainer';
import EntryContainer from '../../containers/EntryContainer';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={EntriesContainer} />
      <Route exact path="/edit"  component={EntryContainer} />
    </Switch>);
}
