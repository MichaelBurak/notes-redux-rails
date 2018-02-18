//Presentational component = renders title and body of passed in Note. 

import React from 'react'

const Note = ({note}) => {

    return (
      <div>
        <h3>Current Note Title: {note.title}</h3>
        <p>{note.body}</p>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }

export default Note
