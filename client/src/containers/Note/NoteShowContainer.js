//Container for Showing and working with a singular note. Displays after loading
//the note, a delete button, and the container for editing notes.

import React from 'react';
import Note from '../../components/Note';
import DeleteNote from '../../components/DeleteNote';
import EditNoteContainer from './EditNoteContainer';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/noteActions.js'
import {bindActionCreators} from 'redux'

class NoteShowContainer extends React.Component {

  render() {
    return (
      < div > 
      {this.props.loading
    ? <h1>Loading page...</h1>
    : 
      <div>
      <Note 
        note={this.props.note}/>
      <DeleteNote 
        note={this.props.note}
        actions={this.props.actions}/>
        </div>
      }
      </div>
    )
  }

}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

const mapStateToProps = (state, ownProps) => {
  const note = state.notePad.notes.find(note => note.id == ownProps.match.params.id)
  const loading = state.notePad.loading

  if (note) {
    return { note, loading }
  } else {
    return { note: {} }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteShowContainer);