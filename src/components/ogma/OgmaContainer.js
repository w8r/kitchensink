import React, { Component } from 'react';

export default class OgmaContainer extends Component {
	componentDidMount() {
    // When the component is mounted, set the rendered HTML as the container of Ogma
    // 'ogma-react' is the id of the HTML element that has been rendererd by the component
        this.props.ogma.render.setContainer('ogma-react');
    }


	render(){
        this.props.ogma.tooltip.onNodeClick(function(node){
            console.log(node);
        });
		return(
			<div>
				Ogma
				<div id='ogma-react' style={{width:'100%', height: '600px'}}></div>
			</div>
		);
	}
}