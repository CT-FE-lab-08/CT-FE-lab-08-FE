import React from 'react';
import EditEntryControls from '../components/controls/EditEntryControls';
import EntryDetail from '../components/entries/EntryDetail';

export default function EntryContainer() {
  return (
    <div>
      Entry Detail
      <EditEntryControls />
      <EntryDetail />
    </div>
  );
}
