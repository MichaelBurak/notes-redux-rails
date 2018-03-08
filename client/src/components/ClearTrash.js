import React from 'react'
import {Button} from 'reactstrap'

const ClearTrash = ({actions}) => {

const clear = (e) => {
    actions.clearTrash()
}

return(
  <div>
< Button type = 'button' onClick = {clear} > Clear the entire Trash </Button>
  </div>
)
}

export default ClearTrash 