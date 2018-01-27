import React from 'react'
import EditNoteForm from '../EditNoteForm'

class EditNoteContainer2 extends React.Component {
  submit = values => {
    console.log(values)
  }
  render(){
    return <EditNoteForm onSubmit={this.submit}/>
  }
}

export default EditNoteContainer2
