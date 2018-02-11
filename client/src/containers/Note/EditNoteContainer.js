//Stateful component responsible for editing notes.

import React from 'react'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions/noteActions.js'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"
import {Button} from 'reactstrap'

class EditNoteContainer extends React.Component {
  //Sets state to include props and all data in state as empty strings.

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: ''
  }
}

  //When component will mount, takes in passed in props from Note presentational, 
  //received from NotesIndex, to set state to proper note being edited's data.

  componentDidMount() {
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
          <textarea rows="10" cols="25" name="body"
            name="body"
            value={this.state.body}
            onChange = {(e) => {this.handleChange(e)}}
            required />
          <Button>Submit</Button>
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
