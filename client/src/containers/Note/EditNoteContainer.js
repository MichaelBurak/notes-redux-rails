import React from 'react'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions/noteActions.js'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"

class EditNoteContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      title: '',
      body: '',
      updated: null
    }
  }

  componentWillMount() {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      body: this.props.body
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    e.preventDefault()
  }

  submitForm(e) {
    e.preventDefault();
    const history = this.props.history
    const values = this.state;
    const id = this.props.id
    this.props.updateNote(values, history, id)
  }

  render() {
    return (
      <div>
        <form>
          <h2> Edit {this.state.title}! </h2>
          <h2>Post Title:</h2><br />
          <input type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange} />
          <br />
          <h3> Post Content:</h3>
          <input type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleChange} />
          <button
            type='button'
            onClick={(e) => this.submitForm(e)}>Submit</button>
        </form>
      </div>
    )}
  }

    const mapDispatchToProps = dispatch => {
      return {
        updateNote: (values, history, id) =>
          dispatch(actions.updateNote(values, history, id)),
          fetchNotes: () =>
          dispatch(actions.fetchNotes())
      }
    }



  export default withRouter(
    connect(null, mapDispatchToProps)(EditNoteContainer)
  );
