//allows editing of single note
import React from 'react';
import { connect } from 'react-redux';

const EditNote = ({ note }) =>
  <div>
    <h3>Title: {note.title}</h3>
    <p>{note.body}</p>
  </div>

  const mapStateToProps = (state, ownProps) => {
    const note = state.notes.notes.find(note => note.id == ownProps.match.params.id)

    if (note) {
      return { note }
    } else {
      return { note: {} }
    }
  }

export default connect(mapStateToProps)(EditNote);
