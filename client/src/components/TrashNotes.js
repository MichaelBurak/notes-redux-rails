// Presentational component: Displays a list of notes by iterating over notes
// passed down from NotesIndexContainer.

import React from 'react'
import RestoreNote from './RestoreNote'
import ClearTrash from './ClearTrash'

const TrashNotes = ({notes, actions}) => {

  return (notes.map((note, i) => {
    return (
      <div key={i}>
        <ul>
          <li>
            <h2>
              {note.title}
            </h2>
          </li>
          {note.body}
          <br/>
          <RestoreNote
          note={note}
          actions={actions}/>
          <ClearTrash 
          actions={actions}/>
        </ul>
      </div>
    )
  }))
}

export default TrashNotes;
