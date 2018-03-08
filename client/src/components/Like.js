import React from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button} from 'reactstrap'
import {bindActionCreators} from 'redux'
import * as actions from '../store/actions/noteActions.js'
import {connect} from 'react-redux';

class Like extends React.Component {
    
    constructor(props) {
    super(props)

    this.state = {
      dropdownOpen: false
    }
  }
    
    componentDidMount(){
        this.setState({isLiked: this.props.note.liked})
    }

    toggle = () => {
        let open = this.state.dropdownOpen
        this.setState({dropdownOpen: !open})
    };

    likeHandler = () => {
        const id = this.props.note.id 
        const isLiked = this.props.note.liked
        this.props.actions.like(id,isLiked)
    }

    render(){
        return(
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
            <DropdownToggle caret>
            Do you want to like this? Note ID {this.props.note.id} is {this.props.note.liked ? "Liked" : "Not Liked"}
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem header> <Button value="isLiked" onClick={this.likeHandler}>Like/Unlike</Button> </DropdownItem>
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