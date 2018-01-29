import React from 'react'
import EditNoteContainer from '../containers/Note/EditNoteContainer'
import * as actions from '../store/actions/noteActions.js'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"

class Note extends React.Component{

  delete(e){
  e.preventDefault();
  const history = this.props.history
  const id = this.props.note.id
  this.props.deleteNote(id, history)
  }

  render() {
  return (
  <div>
    <h3>Current Note Title: {this.props.note.title}</h3>
    <p>{this.props.note.body}</p>
    <button
      type='button'
      onClick={(e) => this.delete(e)}>Delete Note</button> <br/> <br/> <br/>
    <EditNoteContainer
    id={this.props.note.id}
    title={this.props.note.title}
    body={this.props.note.body}/>
  </div>
)}
}

  const mapDispatchToProps = dispatch => {
    return {
      deleteNote: (id, history) =>
      dispatch(actions.deleteNote(id, history)),
      fetchNotes: () =>
      dispatch(actions.fetchNotes())
    }
  }

  export default withRouter(
    connect(null, mapDispatchToProps)(Note)
  );
