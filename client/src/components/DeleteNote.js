//Functional component. Consists of a reactstrap button that on click 
//fires destroy, and thus the action to delete a Note from the store and API.

import React from 'react'
import {Button} from 'reactstrap'

const DeleteNote = ({note, actions}) => {

const destroy = () => {
    const id = note.id
    actions.deleteNote(id)
  }

const hardDestroy = () => {
  const id = note.id 
  actions.hardDeleteNote(id)
}

return(
  <div>
< Button type = 'button' onClick = {destroy} > Delete Note </Button>
< Button type = 'button' onClick = {hardDestroy} > Delete Note Forever</Button>
  </div>
)
}

export default DeleteNote