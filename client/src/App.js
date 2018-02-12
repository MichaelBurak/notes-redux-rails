import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import NotesIndexContainer from './containers/Note/NotesIndexContainer';
import NoteShowContainer from './containers/Note/NoteShowContainer';
import CreateNoteContainer from './containers/Note/CreateNoteContainer';
import UpdatedNote from './components/UpdatedNote'
import DeletedNote from './components/DeletedNote'
import NavigationBar from './components/NavigationBar'
import ErrorAlert from './components/ErrorAlert'
import history from './history'

const App = ({store}) => (
    <Router history={history}>
      <div>
        < NavigationBar/>
        <Switch>
          <Route path="/" exact component={NotesIndexContainer}/>
          <Route exact path={`/notes/new`} component={CreateNoteContainer}/>
          <Route exact path={`/notes/:id/edited`} exact component={UpdatedNote}/>
          <Route exact path={`/notes/:id/deleted`} exact component={DeletedNote}/>
          <Route path={`/notes/:id`} component={NoteShowContainer}/>
          <Route path={`/error/`} component={ErrorAlert}/>
        </Switch>
      </div>
    </Router>
)


export default App