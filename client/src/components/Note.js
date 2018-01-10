//stateless component with a single note

import React from 'react'
import {note} from '../containers/Note/NoteShow'

const Note = ({ note }) =>
  <div>
    <h3>Title: {note.title}</h3>
    <p>{note.body}</p>
  </div>

export default Note
