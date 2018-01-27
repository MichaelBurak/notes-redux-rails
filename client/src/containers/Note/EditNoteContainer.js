import React from 'react'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions/noteActions.js'
import { connect } from 'react-redux';

class EditNote extends React.Component{
  constructor(props){
    super(props)
    this.state={
      id: '',
      title: '',
      body: ''
    }
  }

  componentWillMount(){
    this.setState({
      id: this.props.id,
      title: this.props.title,
      body: this.props.body
    })
  }

  handleChange = (e) => { 
    const { name, value } = e.target; 
    this.setState({ [name]: value }); 
    e.preventDefault() 
  }

  submitForm(e){
    const history = this.props.history
    const values = this.state;
    const id = this.props.id
    this.props.actions.updateNote(values, history, id);
    e.preventDefault();
  };

    render() {
      return (
        <div>
        <form>
        <h2> Edit {this.state.title}! </h2>
        Post Title:<br/>
        <input type="text"
        name="title"
        value={this.state.title}
        onChange={this.handleChange}/> <br/>
        Post Content:<br/>
        <input type="text"
        name="body"
        value={this.state.body}
        onChange={this.handleChange}/>
        <button
        type= 'button'
        className = "Success"
        onClick = {(e) => this.submitForm(e)}>
        </button>
        </form>
        </div>
      )
    }
    }

    function mapDispatchtoProps(dispatch){
      return {actions: bindActionCreators(actions,dispatch)}
    }

export default connect(mapDispatchtoProps)(EditNote)
