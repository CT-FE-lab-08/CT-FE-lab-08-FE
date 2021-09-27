/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import EntriesList from '../components/entries/EntriesList';
import Loading from '../components/Loading';
import NewEntryControls from '../components/controls/NewEntryControls';
import NewEntrySuccess from '../components/entries/NewEntrySuccess';
import { getAllEntries, postEntry } from '../services/fetchEntries';

export default function EntriesContainer() {
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState(null);
  const [name, setName] = useState('');
  const [eventResponse, setEvent] = useState(true);
  const [note, setNote] = useState('');

  useEffect(() => {
    getAllEntries()
      .then((res) => setEntries(res))
      .catch(() => setEntries([]))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await postEntry(name, eventResponse, note);
    setNewEntry(response);
    const newEntries = await getAllEntries();
    setEntries(newEntries);
    setLoading(false);
  };
  
  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'event') setEvent(target.value);
    if(target.name === 'note') setNote(target.value);
  };
  
  if(loading)
    return <Loading />;

  return (
    <div>
      { !newEntry
        ? <NewEntryControls onChange={handleChange} onSubmit={handleSubmit} /> 
        : <NewEntrySuccess id={newEntry.id}/>
      }
      <EntriesList entries={entries} />
    </div>
  );
}
