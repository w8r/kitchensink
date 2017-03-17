import './styles.css';
import React, { Component } from 'react';
import Popover from '../../js/react-popover';

class Popovers extends Component {
	constructor(props){
		super(props);
		this.toggle = this.toggle.bind(this);
		this.content = this.content.bind(this);
		this.state = {
			isOpen: false
		}
	}

	toggle(){
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	content(){
		return(
			<div>
				<img className="avatar" src="https://pbs.twimg.com/profile_images/378800000314896996/cc73d2c9c9ac8bc3902b973750524303_normal.jpeg" />
				<span className="name">Stacey Tinianov</span>
				<a data-activity="opened profile on twitter" className="trackClick" href="https://twitter.com/coffeemommy" target="_blank">@coffeemommy</a>
			</div>
		);
	}

	renderPopover(){	
		return(
			<Popover isOpen={this.state.isOpen} body={this.content()}>
				<div onClick={this.toggle} className="target">
					click me
				</div>
			</Popover>

		);
	}

	render(){
		return(
			<div>This is a popover component
				{this.renderPopover()}
			</div>
		);
	}
}

export default Popovers;