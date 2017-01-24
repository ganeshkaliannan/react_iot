import React from 'react';
import axios from 'axios';


export default class Home extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			email: ""
		};
	}

	componentDidMount() {
		this.get_room_status = setInterval(
			() => this.roomStatus(),
			5000
		);
	}

	roomStatus() {
		var _this = this;
		axios.get('https://mighty-dawn-90967.herokuapp.com//v1/room_status')
			.then(function(response) {
				_this.setState({
					email: response.data.email
				});
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	componentWillUnmount() {
		this.get_room_status.abort();
	}

	render() {
		return (
			<div className="Main-panel">
      	<div className="Email">{this.state.email}</div>
        <div className="Room">
					<a href="#">Room 1</a>
				</div>
				<div className="Room">
					<a href="#">Room 2</a>
				</div>
				<div className="Room">
					<a href="#">Room 3</a>
				</div>
      </div>
		);
	}

}
