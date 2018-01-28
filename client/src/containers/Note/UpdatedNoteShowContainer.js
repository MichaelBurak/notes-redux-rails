import React from 'react';
import UpdatedNote from '../../components/UpdatedNote'
import { connect } from 'react-redux';

const UpdatedNoteShowContainer = ({ note }, props) =>
<UpdatedNote
note = {note}/>

const mapStateToProps = (state, ownProps) => {
  const note = state.notes.notes.find(note => note.id == ownProps.match.params.id)

  if (note) {
    return { note }
  } else {
    return { note: {} }
  }
}

export default connect(mapStateToProps)(UpdatedNoteShowContainer);
