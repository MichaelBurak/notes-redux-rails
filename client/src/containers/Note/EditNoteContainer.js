//Stateful component responsible for editing notes.

import React from 'react'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions/noteActions.js'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"
import throttleAction from 'throttle-action'

class EditNoteContainer extends React.Component {
  //Sets state to include props and all data in state as empty strings.

  constructor(props) {
    super(props)

    this.state = {
      id: '',
      title: '',
      body: ''
    }
  }

  //When component will mount, takes in passed in props from Note presentational, 
  //received from NotesIndex, to set state to proper note being edited's data. 

  componentWillMount() {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      body: this.props.body
    })
  }

  //When changing form, sets state to reflect change on form. 

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  autoSave = (e) => {
  const values = this.state;
  const id = this.props.id
  this.props.actions.save(values, id)
  }

  //Passes in history through withRouter, the state, and the id of the note, 
  //instead of submitting form regularly, calls action to update note with that data.

  submitForm(e) {
    const history = this.props.history
    const values = this.state;
    const id = this.props.id
    this.props.actions.updateNote(values, history, id)
    e.preventDefault();
  }

  //Form for editing note initially populated by note's contents, later changed by
  //user as state is set. Fields require text through HTML required. 

  render() {
    return (
      <div>
      <form onSubmit = {(e) => this.submitForm(e)} >
          <h2> Edit {this.state.title}! </h2> <br/>
          <h3>Edit Note Title:</h3>
          <input type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            required />
          <br />
          <h3> Edit Note Content:</h3>
          <input type="text"
            name="body"
            value={this.state.body}
            onChange = {(e) => {this.handleChange(e);throttleAction(this.autoSave(e), 30000)}}
            required />
          <button>Submit</button>
        </form>
      </div>
    )}
  }

  //Allows for access to actions.

    function mapDispatchToProps(dispatch){
      return {actions: bindActionCreators(actions,dispatch)}
    }

//Exports with knowledge of withRouter and actions.

  export default withRouter(
    connect(null, mapDispatchToProps)(EditNoteContainer)
  );
