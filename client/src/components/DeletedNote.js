// Presentational component: Displays a single deleted note

import React from 'react';
import {connect} from 'react-redux'
import Timer from '../containers/Note/Timer'

const DeletedNote = ({deletedNote, loading}) => {

  return(
  <div>
  {loading
  ?  <h1>Loading page...</h1>:
  <div>
  <h1>
    You have deleted your note! Here is what you deleted -
  </h1>
  <h3>Title: {deletedNote.title}</h3>
  <p>{deletedNote.body}</p>
  <Timer/>
  </div>
  }
</div>
  )
}

 const mapStateToProps = (state, ownProps) => {
   const deletedNote = state.notePad.deletedNote
   const loading = state.notePad.loading 

   return {deletedNote, loading}
 }

 export default connect(mapStateToProps)(DeletedNote)