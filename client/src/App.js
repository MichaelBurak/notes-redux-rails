//Main App component. Displays navigation bar on all displayed components and handles 
//routing.

import React, { Component } from 'react';
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotesIndexContainer from './containers/Note/NotesIndexContainer';
import NoteShowContainer from './containers/Note/NoteShowContainer';
import CreateNoteContainer from './containers/Note/CreateNoteContainer';
import UpdatedNoteShowContainer from './containers/Note/UpdatedNoteShowContainer';
import DeletedNoteContainer from './containers/Note/DeletedNoteContainer'
import NavigationBar from './components/NavigationBar'
import {bindActionCreators} from 'redux';
import * as actions from './store/actions/noteActions';

class App extends Component {

  componentWillMount() {
  if (this.props.notes.length === 0) {
    this.props.actions.fetchNotes()
  }
}

  render() {
    return (
    <div>
    <NavigationBar />
    <Router>
    <Switch>
    <Route path="/" exact component={NotesIndexContainer} />
    <Route exact path={`/notes/new`} component={CreateNoteContainer} />
    <Route exact path={`/notes/:id/edited`} exact component= {UpdatedNoteShowContainer} />
    <Route exact path={`/notes/:id/deleted`} exact component= {DeletedNoteContainer} />
    <Route path={`/notes/:id`} component={NoteShowContainer} />
    </Switch>
    </Router>
    </div>
    );
  }
}

//Gives access to notes in store.

function mapStateToProps(state) {
  return {notes: state.notePad.notes}
}

//Gives access to actions, specifically fetchNotes() in this case.

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
