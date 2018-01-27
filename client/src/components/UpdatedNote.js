//stateless component with a single note

import React from 'react'


const UpdatedNote = ({note}) =>
  <div>
    <h1> You have updated your note! Here is the updated note: </h1>
    <h3>Title: {note.title}</h3>
    <p>{note.body}</p>
  </div>

  //const mapStateToProps = (state, ownProps) => {
    //const title = state.notes.notes.find(note => note.id == ownProps.match.params.id).title
    //const body = state.notes.notes.find(note => note.id == ownProps.match.params.id).body
  //}

export default UpdatedNote
