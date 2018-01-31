//Stateful component responsible for editing notes.

import React from 'react'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions/noteActions.js'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"
import {Grid, Row, Col} from 'react-bootstrap'

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
  //Wait shortly for all elements to be set and then start checking for changes.

  componentDidMount() {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      body: this.props.body
    })
    setTimeout(()=> this.startCycle(), 300)
    }
    

  //When changing form, sets state to reflect change on form. 

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  //Store local state in constant. In 10 seconds, pass local state into checking 
  //for autosaving or not.

  startCycle = () => {
    const stateA = this.state
    setTimeout(()=> this.checkCycle(stateA), 10000)
  }

  //Compare passed in state from 10 seconds ago to current state set as variable.
  //If same, start new cycle. If note has been changed, trigger autosave.

  checkCycle(stateA) {
  const stateB= this.state 
  stateA === stateB ? this.startCycle() : this.autoSave()
  }

  //Mirrors submission of form, except call to save action for re-render on other
  //component on page of new note through .save and starting a new checking cycle 
  //for seeing if note should autosave.
  
  autoSave = (e) => {
  const values = this.state;
  const id = this.props.id
  this.props.actions.save(values, id)
  this.startCycle()
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
      <Grid>
      <Row className="show-grid">
      <Col sm={6} md={3}>
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
            onChange = {(e) => {this.handleChange(e)}}
            required />
          <button>Submit</button>
        </form>
        Protip: This page will autosave your note if it is edited every 10 seconds. 
        Just watch!
        </Col>
        </Row>
        </Grid>
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
