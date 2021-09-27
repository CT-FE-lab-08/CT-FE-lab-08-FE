/* eslint-disable max-len */
import React, { useState } from 'react';
import EditEntryControls from '../components/controls/EditEntryControls';
import GetEntryControls from '../components/controls/GetEntryControls';
import { deleteEntry, getEntryById, updateEntry } from '../services/fetchEntries';
import Loading from '../components/Loading';

export default function EntryContainer() {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [eventResponse, setEvent] = useState(true);
  const [note, setNote] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = ({ target }) => {
    if(target.name === 'id') setId(target.value);
    if(target.name === 'name') setName(target.value);
    if(target.name === 'event') setEvent(target.value);
    if(target.name === 'note') setNote(target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await getEntryById(id);
    if (response.message) {
      setName('');
      setEvent(true);
      setNote('');
      setMessage({ message: 'Invalid Entry ID' });
    }
    if (!response.message) {
      setName(response.name);
      setEvent(response.event);
      setNote(response.note);
      setMessage('');
    }
    setLoading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await updateEntry(id, name, eventResponse, note);
    setMessage({ message: `Event ${response.id} successfully updated` });
    setName('');
    setEvent(true);
    setNote('');
    setLoading(false);
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await deleteEntry(id);
    setMessage(response);
    setLoading(false);
  };

  if (loading) return <Loading />;
  if (message) return (
    <>
      <GetEntryControls onChange={handleChange} onSubmit={handleSearch}/>
      <p>{message.message}</p>
    </>
  );

  return (
    <>
      <GetEntryControls onChange={handleChange} onSubmit={handleSearch}/>
      { name 
        ?
        <>
          <EditEntryControls 
            onChange={handleChange} 
            onSubmit={handleSubmit} 
            onDelete={handleDelete}
            name={name} 
            event={eventResponse} 
            note={note}/>
        </>
        : <></>
      }
    </>
  );
}
