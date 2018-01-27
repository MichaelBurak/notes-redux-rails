import React, {Component} from 'react'
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form'

  let EditNoteForm = props => {
    const { handleSubmit, pristine, initialize } = props

    return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <Field name="title" component="input" type="text" value = "title"/>
      </div>
      <div>
        <label htmlFor="body">Content</label>
        <Field name="body" component="input" type="text" value = "body"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

  function mapStateToProps(state, ownProps) {
    debugger
    const note = state.notes.notes.find(note => note.id == ownProps.match.params.id)
    console.log(state.notes.notes)
    debugger
  return {
    initialValues: {
      title: note.title,
      body: note.body
    }
}
}


EditNoteForm = reduxForm({
  form: 'edit',
  enableReinitialize: true
}, mapStateToProps)(EditNoteForm)

export default EditNoteForm
