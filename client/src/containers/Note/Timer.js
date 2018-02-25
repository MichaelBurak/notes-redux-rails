import React from 'react'

class Timer extends React.Component {

    state = {
      timer: null,
      secondsLeft: 10
    }

   componentDidMount(){
       let timer = setInterval(this.tick, 1000)
       this.setState({timer})
   }

   tick = () => {
       this.setState({
           secondsLeft: this.state.secondsLeft-=1
       })
    }

    componentWillUnmount(){
        clearInterval(this.state.timer)
    }

   render(){
       return(
           <p>This page will re-render in {this.state.secondsLeft} seconds</p>
       )
   }
}
  
 export default Timer 