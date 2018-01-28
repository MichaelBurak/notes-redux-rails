import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './store/actions/noteActions.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotesIndexContainer from './containers/Note/NotesIndexContainer';
import NoteShowContainer from './containers/Note/NoteShowContainer';
import CreateNoteContainer from './containers/Note/CreateNoteContainer';
import UpdatedNoteShowContainer from './containers/Note/UpdatedNoteShowContainer';
import DeletedNoteContainer from './containers/Note/DeletedNoteContainer'
import NavigationBar from './components/NavigationBar'

class App extends Component {

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

function mapStatetoProps(state) {
  return {notes: state.notes.notes}
}

function mapDispatchtoProps(dispatch){
  return {actions: bindActionCreators(actions,dispatch)}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App)
