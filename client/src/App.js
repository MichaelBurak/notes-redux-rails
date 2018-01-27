import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './store/actions/noteActions.js'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotesContainer from './containers/NotesContainer';
import NoteShowContainer from './containers/Note/NoteShowContainer';
import CreateNoteContainer from './containers/Note/CreateNoteContainer';

class App extends Component {
  componentWillMount() {
    if (this.props.notes.length === 0) {
      this.props.actions.fetchNotes()
    }
  }

  render() {
    return (
    <div>
    <Router>
    <Switch>
    <Route path="/" exact component={NotesContainer} />
    <Route exact path={`/notes/new`} component={CreateNoteContainer} />
    <Route path={`/notes/:id`} exact component={NoteShowContainer} />
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
