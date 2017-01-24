import React from 'react';

class Header extends React.Component {

	constructor(props){
		super(props)
	}

  componentDidMount(){ }

  componentWillUnmount(){ }

  render(){
	  return(
			<div className="Header">
				<span className="icon-zinios"></span>
			</div>
	  );
  }
}

export default Header;
