import React from 'react'
import {Button} from 'reactstrap'

const ClearTrash = ({actions}) => {

const clear = (e) => {
    e.preventDefault()
    actions.clearTrash()
}

return(
  <div>
< Button type = 'button' onClick = {(e) => clear(e)
} > CLEANSE THE TRASH </Button>
  </div>
)
}

export default ClearTrash 