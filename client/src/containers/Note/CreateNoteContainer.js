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

  //Two onChange events changing the state based on input in form. 

  changeText(e) {
    this.setState({
      title: e.target.value
    });
  }

  changeBody(e){
    this.setState({
      body: e.target.value
    })
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
      <form onSubmit = {(e) => this.submitForm(e)} >
      <h2> Create a New Note! </h2>
      Note Title:<br/>
      <input type="text" name="title" value={this.state.title} onChange={(e) => this.changeText(e)} required /> <br/>
      Note Content:<br/>
      <input type="text" name="body" value={this.state.body} onChange={(e) => this.changeBody(e)} required />
      <button>Submit
      </button>
      </form>
      </div>
    )
  }
  }

  function mapStateToProps(state) {
    return {notes: state.notes.notes}
  }

  //Allows actions to be accessed as props at this.props.actions.[action]

  function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators(actions,dispatch)}
  }

  //Connects component to redux store.
  
  export default connect(mapStateToProps, mapDispatchToProps)(CreateNoteContainer)
