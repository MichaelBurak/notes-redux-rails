import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './store/actions/noteActions.js'
import './App.css';

class App extends Component {
  componentDidMount() {
    if (this.props.notes.length === 0) {
      console.log('in component did mount')
      this.props.actions.fetchNotes()
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  console.log('in map state to props')
  return {notes: state.notes.notes}
}

function mapDispatchtoProps(dispatch){
  return {actions: bindActionCreators(actions,dispatch)}
}

export const TestApp = connect(mapStatetoProps, mapDispatchtoProps)(App)
