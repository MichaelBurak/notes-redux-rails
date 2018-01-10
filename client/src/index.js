import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NotesContainer from './containers/NotesContainer';
import NoteShowContainer from './containers/Note/NoteShowContainer';
import EditNoteContainer from './containers/Note/EditNoteContainer';
import CreateNoteContainer from './containers/Note/CreateNoteContainer';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store = {store} >
    <div>
    <Router>
    <Switch>
    <Route exact path="/" component={NotesContainer} />
    <Route exact path={`/notes/:id`} component={NoteShowContainer} />
    <Route exact path={`/notes/:id/edit`} component={EditNoteContainer} />
    <Route exact path={`notes/new`} component={CreateNoteContainer} />
    </Switch>
    </Router>
    </div>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
