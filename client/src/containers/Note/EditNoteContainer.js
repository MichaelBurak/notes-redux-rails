//allows editing of single note
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions/noteActions.js';
import NoteShowContainer from './NoteShowContainer'
import { Field, reduxForm } from 'redux-form'



class EditNoteContainer extends React.Component {
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

  render() {
    return (
      <div>
      <h2> Edit the post! </h2>
      <form onSubmit={(e) => this.submitForm(e)}>
      Post Title:<br/>
      <input type="text" name="title" value={this.state.title} onChange={(e) => this.changeText(e)}/> <br/>
      Post Content:<br/>
      <input type="text" name="body" value={this.state.body} onChange={(e) => this.changeBody(e)}/>
      <input type="submit"/>
      </form>
      </div>
    )
  }
  }

  function mapStateToProps(state,ownProps) {
    debugger
    const note = {title: state.notes.notes.find(note => note.id == ownProps.match.params.id).title, body: state.notes.notes.find(note => note.id == ownProps.match.params.id).body}
    if (note) {
      debugger
      return {note}
    } else {
      return { note: {} }
    }
  }

  function mapDispatchtoProps(dispatch){
    return {actions: bindActionCreators(actions,dispatch)}
  }

export default connect(mapStateToProps, mapDispatchtoProps)(EditNoteContainer);
