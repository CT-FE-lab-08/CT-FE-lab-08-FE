import React from 'react';
import EditEntryControls from '../components/app/controls/EditEntryControls';
import EntryDetail from '../components/app/entries/EntryDetail';

export default function EntryContainer() {
  return (
    <div>
      Entry Detail
      <EditEntryControls />
      <EntryDetail />
    </div>
  );
}
