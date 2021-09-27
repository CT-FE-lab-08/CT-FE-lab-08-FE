/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import NewEntryControls from '../components/controls/NewEntryControls';
import EntriesList from '../components/entries/EntriesList';
import Loading from '../components/Loading';
import { getAllEntries, postEntry } from '../services/fetchEntries';

export default function EntriesContainer() {
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState('');
  const [event, setEvent] = useState(true);
  const [note, setNote] = useState('');

  useEffect(() => {
    getAllEntries()
      .then((res => setEntries(res)))
      .catch(() => setEntries([]))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'event') setEvent(target.value);
    if(target.name === 'note') setNote(target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    await postEntry(name, event, note);
    await getAllEntries();
    setLoading(false);
  };

  if(loading)
    return <Loading />;

  return (
    <div>
      <NewEntryControls onChange={handleChange} onSubmit={handleSubmit} />
      <EntriesList entries={entries} />
    </div>
  );
}
