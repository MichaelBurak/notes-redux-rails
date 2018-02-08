//Stateful component responsible for creation of new notes.

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions/noteActions.js'

class CreateNoteContainer extends React.Component {

  //Constructor sets initial state of form values to empty strings and takes in 
  //props.

  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  //onChange event to handle form input into state change.

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  //Pulls in history from router as prop, passes state set by both onChange functions
  //and history into action responsible for creating new notes, prevents default action 
  //of form.

  submitForm(e){
        const history = this.props.history
        const values = this.state;
        this.props.actions.createNote(values, history);
        e.preventDefault();
    };

  //Simple creation form with onSubmit form handler, values set by state and changed with 
  //user input, as well as requiring presence of data in form fields through required.

  render() {
    return (
      <div>
      {
      this.props.loading? <h1>Loading page...</h1> :
      <form onSubmit = {(e) => this.submitForm(e)} >
      <h2> Create a New Note! </h2>
      Note Title:<br/>
      <input type="text" name="title" value={this.state.title} onChange={this.handleChange} required /> <br/>
      Note Content:<br/>
      <textarea rows="10" cols="25" name="body" value={this.state.body} onChange={this.handleChange} required />
      <button>Submit
      </button>
      </form>
      }
      </div>
    )
  }
  }

  function mapStateToProps(state) {
    return {notes: state.notePad.notes, loading: state.notePad.loading}
  }

  //Allows actions to be accessed as props at this.props.actions.[action]

  function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators(actions,dispatch)}
  }

  //Connects component to redux store.

  export default connect(mapStateToProps, mapDispatchToProps)(CreateNoteContainer)
