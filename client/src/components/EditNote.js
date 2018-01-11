//presentational component for editing of note, including a delete button

import React from 'react'

const EditNote = ({ note }) =>
<div>
  <form>
  Post title:<br/>
  <input type="text" name="title"/>
  <br/>
  Post text:<br/>
  <input type="text" name="body" />
  <input type="submit"/>
  </form>
</div>


export default EditNote
