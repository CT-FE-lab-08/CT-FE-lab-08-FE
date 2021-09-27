/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import style from '../../style.css';

export default function GetEntryControls({ onChange, onSubmit }) {
  return (
    <div>
      <h2>get entry</h2>
      <form className={style.flexrow} onSubmit={onSubmit}>
        <label htmlFor="name">
          <input type="text" aria-label="id"name="id" placeholder="entry id" onChange={onChange} />
        </label>
        <button aria-label="submit-id">Search for Entry</button>
      </form>
    </div>
  );
}

GetEntryControls.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
