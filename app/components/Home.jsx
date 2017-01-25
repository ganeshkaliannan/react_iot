import React from 'react';
import axios from 'axios';
import available from './../../images/Available-tag.png';
import occupied from './../../images/occupied-tag.png';

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
		var _this = this;
		axios.get('https://mighty-dawn-90967.herokuapp.com/v1/rooms')
			.then(function(response) {
				_this.setState({
					rooms: response.data
				});
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
				<div className="Main-heading">War rooms availability</div>
				<div className="Main-sub-heading">Realtime updates to plan your meetings</div>
        {this.state.rooms.map(function(room) {
          return (
						<div className="Room-panel">
	            <div className="Room">
	              {
									room.is_occupied ?
	                <span className="icon-Occupied"></span> :
	                <span className="icon-Empty"></span>
	              }
							</div>
							{ room.is_occupied ?
								<img className="Img-tag" src={occupied} />  : <img className="Img-tag" src={available} /> }
							<div className="status-text">
								{ room.name } is { room.is_occupied?<span> Occupied.</span> : <span> Available.</span> }
							</div>
						</div>
          );
        })}
      </div>
		);
	}

}
