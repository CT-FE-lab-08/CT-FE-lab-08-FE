/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import style from '../../style.css';

export default function EditEntryControls({ onChange, onSubmit, onDelete, name, event, note }) {
  // { name, event, note } = entry;
  return (
    <>
      <h2>Edit Entry</h2>
      <form className={style.flexrow} onSubmit={onSubmit}>
        <label htmlFor="name">
          <input type="text" aria-label="name" name="name" placeholder={name} onChange={onChange} />
        </label>

        <section className={style.flexrow}>
          <label htmlFor="yes" className={style.flexrow}>
            <input type="radio" id="yes" name="event" value="true" onChange={onChange} checked={event === true || event === 'true'}/>
            <p>YES</p>
          </label>
          <label htmlFor="no" className={style.flexrow}>
            <input type="radio" id="no" name="event" value="false" onChange={onChange} checked={event === false || event === 'false'}/>
            <p>NO</p>
          </label>
        </section>

        <label htmlFor="note">
          <input type="text" aria-label="note" name="note" placeholder={note} onChange={onChange} />
        </label>

        <button  type="submit" aria-label="submit-update">Save Updated Entry</button>
      </form>
      <button type="button" aria-label="submit-delete" onClick={onDelete}>Delete Entry</button>
    </>
  );
}

EditEntryControls.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  event: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]).isRequired,
  note: PropTypes.string.isRequired,
};
