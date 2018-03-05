//Main index page displayed on root of all notes.

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TrashNotes from '../../components/TrashNotes'
import DeletionSelector from '../../components/DeletionSelector'
import * as actions from '../../store/actions/noteActions'

class TrashContainer extends React.Component {

  // Renders Notes presentational with data passed down through store to props
  // below.

  render() {
    return (
      <div>
        {this.props.loading
          ? <h1>Loading page...</h1>
          : 
            <TrashNotes 
          notes={this.props.notes}
          actions={this.props.actions}/>
}
      </div>
    )
  }
}

//Gives access to notes in store.

function mapStateToProps(state) {
  return {notes: state.notePad.trash, loading: state.notePad.loading}
}

//Gives access to actions, specifically fetchNotes() in this case.

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

//Connects to store.

export default connect(mapStateToProps, mapDispatchToProps)(TrashContainer)
