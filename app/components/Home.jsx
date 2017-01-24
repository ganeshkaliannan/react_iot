import React from 'react';
import axios from 'axios';


export default class Home extends React.Component {

	constructor(props) {
		super(props)
		this.roomStatus.bind(this);
		this.state = {
			rooms: []
		};
	}


	componentDidMount() {
		this.get_room_status = setInterval(
			() => this.roomStatus(),
			1000
		);
	}

	roomStatus() {
		console.log(1234);
		var _this = this;
		axios.get('https://mighty-dawn-90967.herokuapp.com/v1/rooms')
			.then(function(response) {
				_this.setState({
					rooms: response.data
				});
				console.log(_this.state.rooms);
			})
			.catch(function(error) {
				console.log(error);
			});

	}

	componentWillUnmount() {
		clearInterval(this.get_room_status);
	}

	render() {
		return (
			<div className="Main-panel">
                  {this.state.rooms.map(function(room) {
          return (
           <div className="Room Room1">
             {room.is_occupied? <span className="icon-meeting"></span>:<span className="icon-available"></span>}
					<span>{room.name}</span>
				</div>
          );
        })}
      </div>
		);
	}

}