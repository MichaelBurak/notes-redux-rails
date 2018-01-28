import React from 'react'


const DeletedNote = ({note}) =>
  <div>
    <h1> You have deleted your note! Here is what you deleted: </h1>
    <h3>Title: {note.title}</h3>
    <p>{note.body}</p>
    This page will re-render in 30 seconds.
  </div>

export default DeletedNote