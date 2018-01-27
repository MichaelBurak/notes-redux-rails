//stateless component with a single note

import React from 'react'
import EditNoteContainer from '../containers/Note/EditNoteContainer'
import UpdatedNote from './UpdatedNote';

const Note = ({ note }, props) =>
  <div>
  {props.updated? <UpdatedNote
    note= {note}/> : null}
    <h3>Title: {note.title}</h3>
    <p>{note.body}</p>
    <EditNoteContainer
    id={note.id}
    title={note.title}
    body={note.body}/>
  </div>


export default Note
