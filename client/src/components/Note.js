//stateless component with a single note

import React from 'react'
import EditNoteContainer from '../containers/Note/EditNoteContainer'

const Note = ({ note }, props) =>
  <div>
    <h3>Title: {note.title}</h3>
    <p>{note.body}</p>
    <EditNoteContainer
    id={note.id}
    title={note.title}
    body={note.body}/>
  </div>


export default Note
