//presentational component for editing of note, including a delete button

import React from 'react'
import {note} from '../containers/Note/EditNoteContainer'

const EditNote = ({ note }) =>
  <div>
    <h3>Title: {note.title}</h3>
    <p>{note.body}</p>
  </div>

export default EditNote
