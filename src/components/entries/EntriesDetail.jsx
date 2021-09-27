/* eslint-disable max-len */
import React from 'react';
import style from '../../style.css';
import PropTypes from 'prop-types';

export default function EntryDetail({ entry }) {
  const { name, event, note, date } = entry;

  if (event) return (
    <div>
      <p>{`${name} cried on ${date}. "${note}"`}</p>
    </div>
  );

  if (!event) return (
    <p>{`${name} didn't cry on ${date}. "${note}"`}</p>
  );
}

EntryDetail.propTypes = {
  entry: PropTypes.shape({
    name: PropTypes.string.isRequired,
    event: PropTypes.bool.isRequired,
    note: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })
};
