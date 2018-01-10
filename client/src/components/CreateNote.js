//presentational component for creation of note

import React from 'react'

const CreateNote = () =>
  <div>
    <form>
    Post title:<br/>
    <input type="text" name="title" />
    <input type="text" name="body" />
    </form>
  </div>

export default CreateNote
