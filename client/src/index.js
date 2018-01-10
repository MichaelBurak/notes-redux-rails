import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NotesContainer from './containers/NotesContainer';
import NoteShow from './containers/Note/NoteShow';
import EditNote from './containers/Note/EditNote';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store = {store} >
  <Router>
    <div>
    <Route exact path="/" component={NotesContainer} />
    <Route exact path={`/notes/:id`} component={NoteShow} />
    <Route exact path={`/notes/:id/edit`} component={EditNote} />
    </div>
  </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
