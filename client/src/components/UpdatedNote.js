//Presentational component: 
//Shows an updated note before rerendering through thunk action.

import React from 'react'

const UpdatedNote = ({note}) =>
  <div>
    <h1> You have updated your note! Here is the updated note - </h1>
    <h3>Title: {note.title}</h3>
    <p>{note.body}</p>
  </div>

export default UpdatedNote
