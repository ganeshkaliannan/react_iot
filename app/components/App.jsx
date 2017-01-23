import React from 'react';

class App extends React.Component {
  
  constructor(props) {
   super(props);
   this.state = {date: new Date()};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
	  this.setState({
	      date: new Date()
	    });
  }

  handleClick(e){
  e.preventDefault();
  console.log(this);
  }

  render() {
    return (
      <div>
        <h1>IOT sensor App!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
         <a href="#" onClick={this.handleClick}>
      Click me
    </a>
      </div>
    );
  }
}

export default App;

