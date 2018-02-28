// Presentational component: Shows an updated note before rerendering

import React from 'react'
import {connect} from 'react-redux';
import Timer from '../containers/Note/Timer'

const UpdatedNote = ({note, loading}) => {

return(
<div>
  {loading? 
  <h1>Loading page...</h1>:
  <div>
  <h1>
    You have updated your note! Here is the updated note -
  </h1>
  <h3>Title: {note.title}</h3>
  <p>{note.body}</p>
  <Timer/>
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

export default connect(mapStateToProps)(UpdatedNote);