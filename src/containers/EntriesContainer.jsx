import React from 'react';
import NewEntryControls from '../components/app/controls/NewEntryControls';
import EntriesList from '../components/app/entries/EntriesList';

export default function EntriesContainer() {
  return (
    <div>
      Entries Container
      <NewEntryControls />
      <EntriesList />
    </div>
  );
}
