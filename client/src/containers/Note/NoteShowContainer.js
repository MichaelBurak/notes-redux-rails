import React from 'react';
import Note from '../../components/Note';
import { connect } from 'react-redux';

const NoteShowContainer = ({ note }, props) =>
<Note
note = {note}/>

const mapStateToProps = (state, ownProps) => {
  const note = state.notes.notes.find(note => note.id == ownProps.match.params.id)

  if (note) {
    return { note }
  } else {
    return { note: {} }
  }
}

export default connect(mapStateToProps)(NoteShowContainer);
