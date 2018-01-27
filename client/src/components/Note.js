//stateless component with a single note

import React from 'react'
import { Link } from 'react-router-dom';
import EditNote from './EditNote'

const Note = ({ note }) =>
  <div>
    <h3>Title: {note.title}</h3>
    <p>{note.body}</p>
    //<Link to={`/notes/${note.id}/edit`}>Edit {note.title}</Link>
    <EditNote
    id={note.id}
    title={note.title}
    body={note.body}/>
  </div>


export default Note
