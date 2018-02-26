// Presentational component: Displays a list of notes by iterating over notes
// passed down from NotesIndexContainer.

import React from 'react'
import {Link} from 'react-router-dom';
import Like from '../containers/Note/Like'

const Notes = (props) => {
  return (props.notes.map((note, i) => {
    return (
      <div key={i}>
        <ul>
          <li>
            <h2>
              <Link to={`/notes/${note.id}`}>{note.title}</Link>
            </h2>
          </li>
          {note.body}
          <br/>
          <Like 
          note = {note}/>
        </ul>
      </div>
    )
  }))
}

export default Notes;
