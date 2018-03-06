import React from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button} from 'reactstrap'
import {bindActionCreators} from 'redux'
import * as actions from '../../store/actions/noteActions.js'
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

    toggle = (e) => {
        e.preventDefault()
        let open = this.state.dropdownOpen
        this.setState({dropdownOpen: !open})
    };

    likeHandler = (e) => {
        e.preventDefault() 
        const id = this.props.note.id 
        this.props.actions.like(id)
    }

    render(){
        return(
            <Dropdown isOpen={this.state.dropdownOpen} toggle={(e) => {this.toggle(e)}} >
            <DropdownToggle caret>
            Do you want to like this? Note ID {this.props.note.id} is {this.props.note.liked ? "Liked" : "Not Liked"}
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