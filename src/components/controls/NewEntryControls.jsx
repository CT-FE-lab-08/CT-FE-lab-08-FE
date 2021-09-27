/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import style from '../../style.css';

export default function NewEntryControls({ onChange, onSubmit }) {
  return (
    <>
      <h2>New Entry</h2>
      <form className={style.flexrow} onSubmit={onSubmit}>
        
        <label htmlFor="name">
          <input type="text" aria-label="name"name="name" placeholder="your name" onChange={onChange} />
        </label>

        <section className={style.flexrow}>did you cry today?
          <label htmlFor="yes" className={style.flexrow}>
            <input type="radio" id="yes" name="event" value="true" onChange={onChange} />
            <p>YES</p>
          </label>
          <label htmlFor="no" className={style.flexrow}>
            <input type="radio" id="no" name="event" value="false" onChange={onChange} />
            <p>NO</p>
          </label>
        </section>

        <label htmlFor="note">
          <input type="text" aria-label="note" name="note" placeholder="tell me about it" onChange={onChange} />
        </label>

        <button aria-label="submit">Submit</button>
      </form>
    </>
  );
}

NewEntryControls.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
