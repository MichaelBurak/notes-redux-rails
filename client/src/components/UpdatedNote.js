// Presentational component: Shows an updated note before rerendering through
// thunk action.

import React from 'react'
import {connect} from 'react-redux';

const UpdatedNote = ({note}) => <div>
  <h1>
    You have updated your note! Here is the updated note -
  </h1>
  <h3>Title: {note.title}</h3>
  <p>{note.body}</p>
  This page will re-render in 10 seconds.
</div>

const mapStateToProps = (state, ownProps) => {
  const note = state.notePad.notes.find(note => note.id == ownProps.match.params.id)

  if (note) {
    return {note}
  } else {
    return {note: {}}
  }
}

//Connects to store.

export default connect(mapStateToProps)(UpdatedNote);