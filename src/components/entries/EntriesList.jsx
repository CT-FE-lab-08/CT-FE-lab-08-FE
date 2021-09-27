import React from 'react';
import EntriesDetail from './EntriesDetail';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function EntriesList({ entries }) {
  return (
    <>
      <h2>Entries</h2>
      <ul>
        {entries.map(entry => (
          <li key={entry.id}>
            <EntriesDetail entry={entry}/>
          </li>
        ))}
      </ul>
      <Link to="/edit">
        <p>Edit an existing entry</p>
      </Link>
    </>
  );
}

EntriesList.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      event: PropTypes.bool.isRequired,
      note: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  )
}