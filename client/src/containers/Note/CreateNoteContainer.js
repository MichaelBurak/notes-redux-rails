import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions/noteActions.js'

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
        const history = this.props.history
        const values = this.state;
        this.props.actions.createNote(values, history);
        e.preventDefault();
    };

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
      onClick = {(e) => this.submitForm(e)}>Submit
      </button>
      </form>
      </div>
    )
  }
  }

  function mapStateToProps(state) {
    return {notes: state.notes.notes}
  }

  function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators(actions,dispatch)}
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CreateNoteContainer)
