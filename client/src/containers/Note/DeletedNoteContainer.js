// Uses ownProps from router to locate proper note from store, displays
// presentational deleted note component with proper note passed down as prop.

import React from 'react';
import DeletedNote from '../../components/DeletedNote';
import {connect} from 'react-redux';

const DeletedNoteContainer = ({deletedNote}) => <DeletedNote deletedNote={deletedNote}/>

const mapStateToProps = (state) => {
  const deletedNote = state.notePad.deletedNote
  return {deletedNote}
}

export default connect(mapStateToProps)(DeletedNoteContainer);
