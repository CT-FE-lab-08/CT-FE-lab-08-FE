import React from 'react';
import style from '../../style.css';

export default function EditEntryControls() {
  return (
    <>
      <h2>Edit Entry</h2>
      <form className={style.flexrow}>
        <label htmlFor="name">
          <input type="text" aria-label="name"placeholder="name" />
        </label>

        <section className={style.flexrow}>
          <label htmlFor="yes" className={style.flexrow}>
            <input type="radio" id="yes" name="cry" value="true" />
            <p>YES</p>
          </label>
          <label htmlFor="no" className={style.flexrow}>
            <input type="radio" id="no" name="cry" value="false" />
            <p>NO</p>
          </label>
        </section>

        <label htmlFor="note">
          <input type="text" aria-label="note" placeholder="notes" />
        </label>

      </form>
      <button aria-label="submit">Submit</button>
    </>
  );
}
