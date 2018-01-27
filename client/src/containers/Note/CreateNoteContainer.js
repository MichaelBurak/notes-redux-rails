//handles creation of a single note with autosave through throttle
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions/noteActions.js'
import { Link } from 'react-router-dom';

class CreateNoteContainer extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: ''
    };
  }

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

  submitForm(e){
    debugger
    function conditionalExecution(e) {
      debugger
    var isDone = false;
      debugger
    function checkDone (e) {
        if (isDone === true)
        {
            isDone = false;
            return;
        }
        debugger
        e.preventDefault();
        debugger
        const values = {title: `${this.state.title}`, body: `${this.state.body}`};
        debugger
        this.props.actions.createNote(values);
        debugger
        isDone = true;
        debugger
        this.trigger(e.type);
        debugger
    };
  }
}


  render() {
    return (
      <div>
      <form>
      <h2> Create a New Post! </h2>
      Post Title:<br/>
      <input type="text" name="title" value={this.state.title} onChange={(e) => this.changeText(e)}/> <br/>
      Post Content:<br/>
      <input type="text" name="body" value={this.state.body} onChange={(e) => this.changeBody(e)}/>
      <button
      type= 'button'
      className = "Success"
      onClick = {(e) => this.submitForm(e)}> <Link to={"/"}></Link></button>
      </form>
      </div>
    )
  }
  }

  function mapStatetoProps(state) {
    return {notes: state.notes.notes}
  }

  function mapDispatchtoProps(dispatch){
    return {actions: bindActionCreators(actions,dispatch)}
  }

  export default connect(mapStatetoProps, mapDispatchtoProps)(CreateNoteContainer)
