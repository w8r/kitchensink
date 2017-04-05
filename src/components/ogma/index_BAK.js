import React, { Component } from "react";
import Ogma from "../../js/ogma/ogma.min.js";
import OgmaContainer from './OgmaContainer';

class Network extends Component {

    constructor(props){
        super(props);
        this.ogma = new Ogma({
            brand: '<p>Powered by Symplur</p>',
            settings: { 
                
                render: {
                    backgroundColor: '#fff',
                },
                shapes: {
                    defaultEdgeShape: "line",
                    edgesAlwaysCurvy: true,
                    defaultNodeColor: '#99CCFF'
                },
                mouse: {
                    wheelEnabled: false
                },
                // halos: {
                //     nodeColor: 'yellow',
                //     nodeSize: 50,
                //     nodeStrokeColor: 'rgb(236, 81, 72)',
                //     nodeStrokeWidth: 1,
                //     nodeClustering: false,
                //     nodeClusteringMaxRadius: 1000,
                //     edgeColor: 'black',
                //     edgeSize: 10

                // },
                hover: {
                    nodeOuterStrokeColor: 'rgba(236, 81, 72, 0.2)',
                    edgeColor: 'rgba(236, 81, 72, 0.2)',
                    highlightEdgeExtremities: false,
                    nodes: true,
                    outline: false
                },
                icons: {
                    defaultScale: 0.7,
                    defaultColor: 'blue'
                },
                legend: {
                    enabled: true
                }
            }
        });
    }

    render(){
        return(
            <div>
                <OgmaContainer ogma={this.ogma}/>
            </div>
        );
    }
}

export default Network;
