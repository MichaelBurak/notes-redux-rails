//handles creation of a single note with autosave through throttle

//allows editing of single note
import React from 'react';
import CreateNote from '../../components/CreateNote';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions/noteActions.js'

const CreateNoteContainer = () =>
  <CreateNote/>

  function mapStatetoProps(state) {
    return {notes: state.notes.notes}
  }

  function mapDispatchtoProps(dispatch){
    return {actions: bindActionCreators(actions,dispatch)}
  }

  export default connect(mapStatetoProps, mapDispatchtoProps)(CreateNoteContainer)
