// Presentational component: Displays a single deleted note and then through
// actions returns to root.

import React from 'react'
import {connect} from 'react-redux';

const DeletedNote = ({deletedNote}) => <div>
  <h1>
    You have deleted your note! Here is what you deleted -
  </h1>
  <h3>Title: {deletedNote.title}</h3>
  <p>{deletedNote.body}</p>
  This page will re-render in 10 seconds.
</div>

 const mapStateToProps = (state) => {
   const deletedNote = state.notePad.deletedNote
   return {deletedNote}
 }
 export default connect(mapStateToProps)(DeletedNote)


//import React from 'react';
// import DeletedNote from '../../components/DeletedNote';
// import {connect} from 'react-redux';

// const DeletedNoteContainer = ({deletedNote}) => <DeletedNote deletedNote={deletedNote}/>

// const mapStateToProps = (state) => {
//   const deletedNote = state.notePad.deletedNote
//    return {deletedNote}
//  }

// export default connect(mapStateToProps)(DeletedNoteContainer);
