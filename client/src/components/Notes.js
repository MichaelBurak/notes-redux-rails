//this will display multiple notes

import React from 'react'
import { Link } from 'react-router-dom';

const Notes = (props) => {
    return( props.notes.map((note) => {
         return <div>
         <ul>
         <li>
         <h2>
         <Link to={`/notes/${note.id}`}>{note.title}</Link>
         </h2>
         </li>
         {note.body}
         </ul>
         </div>
    }))
  }
export default Notes;
