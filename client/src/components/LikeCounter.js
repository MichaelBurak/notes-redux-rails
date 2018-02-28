import React from 'react' 
import {Button} from 'reactstrap'

class LikeCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        };
        this.onClick = this.onClick.bind(this)
    }

    onClick(e) {
    e.preventDefault()
    //debugger 
    this.setState({likes: this.state.likes + 1})
  }

    render(){
        return(
            <div>
            This is liked {this.state.likes} times!
            <Button onClick={this.onClick}> Like!</Button>
            </div>
        )
    }

}

    export default LikeCounter 