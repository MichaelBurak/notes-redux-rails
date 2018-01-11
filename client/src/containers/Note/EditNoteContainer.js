//allows editing of single note
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions/noteActions.js'


class EditNoteContainer extends React.Component {
  render() {
    return (
      <div>
      <h2> Edit the post! </h2>
      <form>
      Post Title:<br/>
      <input type="text" name="title"/> <br/>
      Post Content:<br/>
      <input type="text" name="body"/>
      <input type="submit"/>
      </form>
      </div>
    )
  }
  }

  function mapStateToProps(state,ownProps) {
    const note = state.notes.notes.find(note => note.id == ownProps.match.params.id)
    if (note) {
      return { note }
    } else {
      return { note: {} }
    }
  }

  function mapDispatchtoProps(dispatch){
    return {actions: bindActionCreators(actions,dispatch)}
  }

export default connect(mapStateToProps, mapDispatchtoProps)(EditNoteContainer);
