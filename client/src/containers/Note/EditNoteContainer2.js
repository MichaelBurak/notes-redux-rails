import React from 'react'
import NoteForm from '../NoteForm'

class EditNoteContainer2 extends React.Component {
  submit = values => {
    console.log(values)
  }
  render(){
    return <NoteForm onSubmit={this.submit}/>
  }
}

export default EditNoteContainer2
