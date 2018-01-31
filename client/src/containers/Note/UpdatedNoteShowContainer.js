//Displays a page that indicates a note has been updated and its new format.

import React from 'react';
import UpdatedNote from '../../components/UpdatedNote'
import { connect } from 'react-redux';

const UpdatedNoteShowContainer = ({ note }, props) =>
<UpdatedNote
note = {note}/>

//Contacts store using router ownProps to locate corresponding note to URL to be 
//passed to presentational.

const mapStateToProps = (state, ownProps) => {
  const note = state.notePad.notes.find(note => note.id == ownProps.match.params.id)

  if (note) {
    return { note }
  } else {
    return { note: {} }
  }
}

//Connects to store.

export default connect(mapStateToProps)(UpdatedNoteShowContainer);
