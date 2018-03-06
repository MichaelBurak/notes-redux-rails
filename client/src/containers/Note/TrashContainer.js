//Main index page displayed on root of all notes.

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TrashNotes from '../../components/TrashNotes'
import * as actions from '../../store/actions/noteActions'
import ClearTrash from '../../components/ClearTrash';

class TrashContainer extends React.Component {

  // Renders Notes presentational with data passed down through store to props
  // below.

  render() {
    return (
      <div>
        {this.props.loading
          ? <h1>Loading page...</h1>
          : <div>
            <TrashNotes 
          notes={this.props.notes}
          actions={this.props.actions}/>
          <ClearTrash
          actions={this.props.actions}/>
            </div>
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
