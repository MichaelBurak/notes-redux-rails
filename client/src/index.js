import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers'
import registerServiceWorker from './registerServiceWorker';
import App from './App'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store = {store} >
    <App store={store}/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
