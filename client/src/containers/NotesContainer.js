//this is analogous to index functionality with mapping

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Notes from '../components/Notes'
import * as actions from '../store/actions/noteActions';
import { Link } from 'react-router-dom';

class NotesContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      notes: {}
    }
  }

  componentWillMount() {
  //if (this.props.notes.length === 0) {
    this.props.actions.fetchNotes()
  //}
}

  componentDidMount() {
    console.log(this.props.notes)
    this.setState({
      notes: this.props.notes
    })
  }

render() {

  return (
    <div>
    <p> test </p>

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
