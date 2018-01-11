//allows editing of single note
import React from 'react';
import { connect } from 'react-redux';

const EditNoteContainer = ({ note }) =>
  <p>refactoring</p>

  const mapStateToProps = (state, ownProps) => {
    const note = state.notes.notes.find(note => note.id == ownProps.match.params.id)

    if (note) {
      return { note }
    } else {
      return { note: {} }
    }
  }

export default connect(mapStateToProps)(EditNoteContainer);
