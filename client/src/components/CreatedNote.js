// Presentational component: Shows an updated note before rerendering through
//history push.

import React from 'react'
import {connect} from 'react-redux';

const CreatedNote = ({note, loading}) => {

return(
<div>
  {loading? 
  <h1>Loading page...</h1>:
  <div>
  <h1>
    You have created your note! Here is the created note -
  </h1>
  <h3>Title: {note.title}</h3>
  <p>{note.body}</p>
  This page will re-render in 10 seconds.
  </div>
  }
</div>
)
}

const mapStateToProps = (state, ownProps) => {
  const note = state.notePad.notes.find(note => note.id == ownProps.match.params.id)
  const loading = state.notePad.loading 

  if (note) {
    return {note, loading}
  } else {
    return {note: {}}
  }
}

//Connects to store.

export default connect(mapStateToProps)(CreatedNote);