//Uses ownProps from router to locate proper note from store, displays presentational
//deleted note component with proper note passed down as prop.

import React from 'react';
import DeletedNote from '../../components/DeletedNote';
import { connect } from 'react-redux';

const DeletedNoteContainer = ({ note }, props) =>
<DeletedNote
note = {note}/>

const mapStateToProps = (state, ownProps) => {
  const note = state.notes.notes.find(note => note.id == ownProps.match.params.id)

  if (note) {
    return { note }
  } else {
    return { note: {} }
  }
}

export default connect(mapStateToProps)(DeletedNoteContainer);
