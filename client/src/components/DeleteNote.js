import React from 'react'
import {Button} from 'reactstrap'

const DeleteNote = ({note, actions}) => {

const destroy = (e) => {
    e.preventDefault();
    const id = note.id
    actions.deleteNote(id)
  }

return(
< Button type = 'button' onClick = {(e) => destroy(e)
} > Delete Note </Button>
)
}

export default DeleteNote