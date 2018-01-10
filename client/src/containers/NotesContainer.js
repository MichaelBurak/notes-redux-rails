//this is analogous to index functionality with mapping

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Notes from '../components/Notes'
import * as actions from '../store/actions/noteActions';
import { Link } from 'react-router-dom';

class NotesContainer extends React.Component {
  componentDidMount() {
  if (this.props.notes.length === 0) {
    this.props.actions.fetchNotes()
  }
}

render() {
  return (
    <div>
    <Notes
    notes= {this.props.notes}/>
    <Link to={`notes/new`}>Create a new note!</Link>
    </div>
  )
}
}

function mapStatetoProps(state) {
  return {notes: state.notes.notes}
}

function mapDispatchtoProps(dispatch){
  return {actions: bindActionCreators(actions,dispatch)}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(NotesContainer)
