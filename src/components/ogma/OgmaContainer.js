import React, { Component } from 'react';


export default class OgmaContainer extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount() {
    // When the component is mounted, set the rendered HTML as the container of Ogma
    // 'ogma-react' is the id of the HTML element that has been rendererd by the component
        this.props.ogma.render.setContainer('ogma-react');

    }


	render(){

		return(
			<div>
				Ogma
				<div id='ogma-react' style={{width:'100%', height: '600px'}}></div>
			</div>
		);
	}
}
