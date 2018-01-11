//handles creation of a single note with autosave through throttle

//allows editing of single note
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions/noteActions.js'

const CreateNoteContainer = () =>
  <p>refactoring</p>

  function mapStatetoProps(state) {
    return {notes: state.notes.notes}
  }

  function mapDispatchtoProps(dispatch){
    return {actions: bindActionCreators(actions,dispatch)}
  }

  export default connect(mapStatetoProps, mapDispatchtoProps)(CreateNoteContainer)
