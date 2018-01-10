//this will display multiple notes

import React from 'react'

const Notes = (props) => {
    return( props.notes.map((note) => {
         return <div>
         <ul>
         <li>
         <h3>
         {note.title}
         </h3>
         </li>
         {note.body}
         </ul>
         </div>
    }))
  }
export default Notes;
