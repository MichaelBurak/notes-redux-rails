import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

const NoteForm = ({handleSubmit}) =>
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

    NoteForm.propTypes = {
      mode: PropTypes.oneOf(['create', 'edit']),
      onSubmit: PropTypes.func
    };


export const NoteForm = reduxForm({
  form: 'note'
})(NoteForm);
