import React, { Component } from 'react';
import SampleData from './data.json';
import _ from 'lodash';
import { Card, CardBlock, CardTitle } from 'reactstrap';

class OgmaContainer extends Component {
	constructor(props){
		super(props);
		this.addNodes = this.addNodes.bind(this);
		this.parseNodes = this.parseNodes.bind(this);
		this.parseEdges = this.parseEdges.bind(this);
		this.endLayout = this.endLayout.bind(this);
		this.setColor = this.setColor.bind(this);
		this.state = {
			data: {}
		}
	}

	addNodes(){
		// var data = this.parseNodes(SampleData);
		// console.log(data);
		this.props.ogma.graph.addNodes(this.parseNodes(SampleData));
		this.props.ogma.graph.addEdges(this.parseEdges(SampleData));
	}

	parseNodes(data) {
        // console.log(data);
        var parsedNodes = _.map(data.nodes, function(nodes) {
            return {
                id: nodes.user.id,
                text: nodes.user.display_name,
                size: nodes.mentions,
                halo: false,
                // x: Math.random() * 100,
                // y: Math.random() * 100,
                data: {
                	categories: _.map(nodes.user.stakeholder_categories, "name"),
                }
      //           image: { 
    		// 		url: nodes.user.profile_image, 
    		// 		rescale: true 
  				// }		 	
            };
        });
        // console.log(parsedNodes);
        return parsedNodes;
    }

    parseEdges(data) {
        // console.log('parsing edges');
        var parsedEdges = _.map(data.edges, function(edges) {
            return {
                id: Math.random(),
                source: edges.from,
                target: edges.to,
                size: edges.count,
                shape: "arrow",
                color: "#ccc"
            };
        });
        return parsedEdges;
    }

	endLayout() {
		console.log('done');
		this.props.ogma.locate.center({
			easing: 'cubicInOut',
			duration: 2000,
			finalZoom: 1.5
		});
	}

	setColor(data){
		// Set node color for qualitative variable
		// console.log(data);
		this.props.ogma.design.setNodeColor({
			variable: 'data.categories',
			scheme: {
				'Doctor': 'green',
				'Patient': 'yellow'
			}
		});
	}
	componentDidMount(){
		this.addNodes();

		this.props.ogma.design.setNodeColor({
			variable: 'data.categories',
			scheme: {
				'Doctor': 'green',
				'Patient': 'yellow'
			}
		});

		this.props.ogma.render.setContainer('ogma-react');

		this.props.ogma.layouts.start('forceLink', {
			// layout parameters
			scalingRatio: 400,
			gravity: 10,
			adjustSizes: true,
			// edgeWeightInfluence: 1,
			linLogMode: false,
			strongGravityMode: false,
			outboundAttractionDistribution: false,
			slowDown: 0.1,
			alignNodeSiblings: true, 
			nodeSiblingsScale: 100,
			nodeSiblingsAngleMin: 3,
			autoStop: true,
			maxIterations: 1000,
			avgDistanceThreshold: 0.01,
			startingIterations: 10,
			iterationsPerRender:  10,
			barnesHutOptimize: true,
			barnesHutTheta: false 


		}, {
			// sync parameters
			duration: 1000,
			onEnd: this.endLayout
		});
	}

	render(){
		return(
			<Card>
				<CardBlock>
					<div id='ogma-react' style={{width:'100%', height: '600px'}}>Ogma Container</div>
				</CardBlock>
			</Card>
			
		);
	}
}

export default OgmaContainer;