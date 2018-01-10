//this is analogous to index functionality with mapping

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../store/actions/noteActions';

class Notes extends React.Component {
  componentDidMount() {
  if (this.props.notes.length === 0) {
    console.log('in component did mount')
    this.props.actions.fetchNotes()
  }
}

render() {
  return (
    <div>
    Test
    </div>
  )
}
}

function mapStatetoProps(state) {
  console.log('in map state to props')
  return {notes: state.notes.notes}
}

function mapDispatchtoProps(dispatch){
  return {actions: bindActionCreators(actions,dispatch)}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Notes)
