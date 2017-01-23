import React from 'react';

class Home extends React.Component {

	constructor(props){
	 super(props)
	 this.handleRoomStatus = this.handleRoomStatus.bind(this);
	 }

	  componentDidMount(){

	  }


	  componentWillUnmount(){

	  }

	  handleRoomStatus(e){
	    e.preventDefault();
	    console.log(this);
	   }

  render(){
  return(
      <div> 
      
        <div><a href="#" onClick={this.handleRoomStatus}>Room 1</a></div>
		<div><a href="#" onClick={this.handleRoomStatus}>Room 2</a></div>
		<div><a href="#" onClick={this.handleRoomStatus}>Room 3</a></div>
      
      </div>
   );
  }

}


export default Home;