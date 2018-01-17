import React from 'react'
import { Field, reduxForm } from 'redux-form'

let NoteForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="body">Content</label>
        <Field name="body" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

NoteForm = reduxForm({
  form: 'note'
})(NoteForm)

export default NoteForm
