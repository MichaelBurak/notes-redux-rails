//Displays a single note as well as the container to edit said note and a button to delete said note.

import React from 'react'
import EditNoteContainer from '../containers/Note/EditNoteContainer'
import * as actions from '../store/actions/noteActions.js'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"
import {bindActionCreators} from 'redux'
import {Button} from 'reactstrap'

class Note extends React.Component{

  //delete function, prevents default submission of form. 
  //pulls in history prop through withRouter despite not being directly on route. 
  //pulls in id through passed down prop from corresponding show container.
  //calls action with appropriate id to delete appropriate note and push to 
  //page with deleted note info.

  delete(e){
  e.preventDefault();
  const history = this.props.history
  const id = this.props.note.id
  this.props.actions.deleteNote(id, history)
  }

  //Renders current note, a button to delete the note, and the editing form.

  render() {
  return (
  <div>
    <h3>Current Note Title: {this.props.note.title}</h3>
    <p>{this.props.note.body}</p>
    <Button
      type='button'
      onClick={(e) => this.delete(e)}>Delete Note</Button> <br/> <br/> <br/>
    <EditNoteContainer
    id={this.props.note.id}
    title={this.props.note.title}
    body={this.props.note.body}/>
  </div>
)}
}
  //Allows for access to actions as props. 

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

  //Exports with knowledge of routes/history and actions as connected to store.
  
  export default withRouter(
    connect(null, mapDispatchToProps)(Note)
  );
