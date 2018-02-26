import React from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button} from 'reactstrap'
import {bindActionCreators} from 'redux'
import * as actions from '../../store/actions/noteActions.js'
import {connect} from 'react-redux';

class Like extends React.Component {
    
    state = {
        dropdownOpen: false,
        isLiked: ''
    }

    componentDidMount(){
        this.setState({isLiked: this.props.note.liked})
        debugger 
    }

    toggle = () => {
        this.setState({dropdownOpen: !this.state.dropdownOpen})
        console.log(this.state.dropdownOpen)
        //this does toggle dropdownOpen, but registers 'false' when open and 
        //'true' when closed, the opposite of expected behavior.
    };

    likeHandler = (e) => {
        e.preventDefault() 
        debugger
        const id = this.props.note.id 
        this.setState((prevState, props) =>( {
            isLiked: !prevState.isLiked
        }))
        //this does not invert the boolean of isLiked.
        //running !this.state.isLiked 
        const isLiked = this.state.isLiked
        debugger
        this.props.actions.like(id, isLiked)
    }

    render(){
        return(
            <Dropdown isOpen={this.state.dropdownOpen } toggle={this.toggle} >
            <DropdownToggle caret>
            Do you want to like this? Note ID {this.props.note.id} is {this.state.isliked ? "Liked" : "Not Liked"}
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem header> <Button value="isLiked" onClick={(e) => {this.likeHandler(e)}}>Like/Unlike</Button> </DropdownItem>
            </DropdownMenu>
            </Dropdown>
        )
    }
}

    function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Like)