//Main index page displayed on root of all notes.

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Notes from '../../components/Notes'
import * as actions from '../../store/actions/noteActions';
import { Link } from 'react-router-dom';

class NotesIndexContainer extends React.Component {
  
  //On mount, grab all notes for display.
  
  componentWillMount() {
  if (this.props.notes.length === 0) {
    this.props.actions.fetchNotes()
  }
}

//Renders Notes presentational with data passed down through store to props below.

render() {
  return (
    <div>
    <Notes
    notes= {this.props.notes}/>
    </div>
  )
}
}

//Gives access to notes in store.

function mapStateToProps(state) {
  return {notes: state.notes.notes}
}

//Gives access to actions, specifically fetchNotes() in this case.

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions,dispatch)}
}

//Connects to store.

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndexContainer)
