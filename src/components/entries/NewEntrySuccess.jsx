/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

export default function NewEntrySuccess({ id }) {
  return (
    <div>
      <p>Your entry was successfully posted. If you think you&apos;ll want to modify this entry in the future, store this id to access the entry:
      </p>
      <p>{id}</p>
      
    </div>
  );
}

NewEntrySuccess.propTypes = {
  id: PropTypes.string.isRequired,
};
