//Presentational component:
//Displays a list of notes by iterating over notes passed down from NotesIndexContainer.

import React from 'react'
import { Link } from 'react-router-dom';

const Notes = (props) => {
    return( props.notes.map((note, i) => {
         return(
         <div key={i}>
         <ul>
         <li>
         <h2>
         <Link to={`/notes/${note.id}`}>{note.title}</Link>
         </h2>
         </li>
         {note.body}
         </ul>
         </div>
       )
    }))
  }

export default Notes;
