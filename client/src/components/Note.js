//Presentational component = renders title and body of passed in Note with link to 
//edit route for introspected upon note. 

import React from 'react'
import {Link} from "react-router-dom"

const Note = ({note}) => {

    return (
      <div>
        <h3>Current Note Title: {note.title}</h3>
        <p>{note.body}</p>
        <Link to={`/notes/${note.id}/edit`}>Edit {note.title}</Link>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }

export default Note
