import React from 'react';
import logo from './../../images/logo-grey.png';

class Header extends React.Component {

	constructor(props){
		super(props)
	}

  componentDidMount(){ }

  componentWillUnmount(){ }

  render(){
	  return(
			<div className="Header">
				<img src={logo} alt="logo" />
			</div>
	  );
  }
}

export default Header;
