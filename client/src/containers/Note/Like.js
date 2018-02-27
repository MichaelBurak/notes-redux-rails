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
    //this.toggle.bind(this)
  }
    


    componentDidMount(){
        this.setState({isLiked: this.props.note.liked})
        //debugger 
    }

    toggle = (e) => {
        e.preventDefault()
        //debugger 
        let open = this.state.dropdownOpen
        //debugger 
        this.setState({dropdownOpen: !open})
    };

    likeHandler = (e) => {
        e.preventDefault() 
        //debugger
        const id = this.props.note.id 
        //https://vasanthk.gitbooks.io/react-bits/patterns/19.async-nature-of-setState.html
        //debugger
        this.props.actions.like(id)
    }

    render(){
        console.log(this.state.dropdownOpen)
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