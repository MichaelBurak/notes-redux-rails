//Functional component. Consists of a reactstrap button that on click 
//fires destroy, and thus the action to delete a Note from the store and API.

import React from 'react'
import {Button} from 'reactstrap'

const DeleteNote = ({note, actions}) => {

const destroy = (e) => {
    e.preventDefault();
    const id = note.id
    //debugger 
    actions.deleteNote(id)
  }

const hardDestroy = (e) => {
  e.preventDefault()
  const id = note.id 
  actions.hardDeleteNote(id)
}

return(
  <div>
< Button type = 'button' onClick = {(e) => destroy(e)
} > Delete Note </Button>
< Button type = 'button' onClick = {(e) => hardDestroy(e)
} > Delete Note Forever</Button>
  </div>
)
}

export default DeleteNote