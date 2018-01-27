//this will contain a single note

import React from 'react';
import Note from '../../components/Note';
import UpdatedNote from '../../components/UpdatedNote';
import EditNoteContainer from './EditNoteContainer'

import { connect } from 'react-redux';

const NoteShowContainer = ({ note }, props) =>
<div>
{props.updated? <UpdatedNote
  note= {note}/> : null}
<Note
note = {note}/>
</div>

const mapStateToProps = (state, ownProps) => {
  const note = state.notes.notes.find(note => note.id == ownProps.match.params.id)

  if (note) {
    return { note }
  } else {
    return { note: {} }
  }
}

export default connect(mapStateToProps)(NoteShowContainer);
