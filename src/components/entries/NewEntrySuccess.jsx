import React from 'react';
import PropTypes from 'prop-types';

export default function NewEntrySuccess({ newEntry }) {
  const { id, name, event, note, date } = newEntry;
  return (
    <div>
      success
      {id}
      {name}
      {event}
      {note}
      {date}
    </div>
  );
}

NewEntrySuccess.propTypes = {
  newEntry: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    event: PropTypes.bool.isRequired,
    note: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })
};
