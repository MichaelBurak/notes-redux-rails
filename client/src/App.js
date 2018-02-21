import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import NotesIndexContainer from './containers/Note/NotesIndexContainer';
import NoteShowContainer from './containers/Note/NoteShowContainer';
import CreateNoteContainer from './containers/Note/CreateNoteContainer';
import UpdateNoteContainer from './containers/Note/UpdateNoteContainer';
import UpdatedNote from './components/UpdatedNote';
import CreatedNote from './components/CreatedNote';
import DeletedNote from './components/DeletedNote';
import NavigationBar from './components/NavigationBar';
import ErrorAlert from './components/ErrorAlert';
import history from './history'

const App = ({store}) => (
    <Router history={history}>
      <div>
        <NavigationBar/>
        <Switch>
          <Route exact path={`/`} component={NotesIndexContainer}/>
          <Route exact path={`/notes/new`} component={CreateNoteContainer}/>
          <Route exact path={`/notes/:id/edited`} component={UpdatedNote}/>
          <Route exact path={`/notes/:id/deleted`} component={DeletedNote}/>
          <Route exact path={`/notes/:id/created`} component={CreatedNote}/>
          <Route exact path={`/notes/:id/edit`} component={UpdateNoteContainer}/>
          <Route exact path={`/notes/:id`} component={NoteShowContainer}/>
          <Route exact path={`/error/`} component={ErrorAlert}/>
        </Switch>
      </div>
    </Router>
)


export default App