import React from 'react'
import {Button} from 'reactstrap'

const RestoreNote = ({note, actions}) => {

const restore = (e) => {
    e.preventDefault();
    const id = note.id
    //debugger 
    actions.restoreNote(id)
  }

const wipe = (e) => {
    e.preventDefault()
    const id = note.id 
    actions.hardWipeNote(id)
}

return(
  <div>
< Button type = 'button' onClick = {(e) => restore(e)
} > Restore Note </Button>
<Button type='button' onClick={(e) => wipe(e)}>Delete Note Forever</Button>
  </div>
)
}

export default RestoreNote