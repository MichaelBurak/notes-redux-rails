//allows editing of single note
import React from 'react';
import EditNote from '../../components/EditNote';
import { connect } from 'react-redux';

const EditNoteContainer = ({ note }) =>
  <EditNote
  note = {note}/>

  const mapStateToProps = (state, ownProps) => {
    const note = state.notes.notes.find(note => note.id == ownProps.match.params.id)

    if (note) {
      return { note }
    } else {
      return { note: {} }
    }
  }

export default connect(mapStateToProps)(EditNoteContainer);
