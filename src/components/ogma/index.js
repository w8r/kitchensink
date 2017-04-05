import React, { Component } from "react";
import Ogma from "../../js/ogma/ogma.min.js";
import SampleData from './data.json';
import OgmaContainer from './OgmaContainer';
import _ from 'lodash';

class Network extends Component {

    constructor(props){
        super(props);
        this.ogma = new Ogma({
            settings: {
                render: {
                    backgroundColor: '#FFFFFF'
                },
                texts: {
                    nodeTextAlignment: 'left'
                },
                shapes: {
                    defaultNodeColor: 'green'
                }
            },
            graph: {
                nodes: [
                    {id: 'n1', color: 'red', shape: 'square', x: 0, y: 0, size: 3, text: 'Node 1'},
                    {id: 'n2', x: 30, y: 10, size: 3, text: 'Node 2'},
                    {id: 'n3', x: 10, y: 30, size: 2, shape: 'cross', color: 'blue', text: 'Node 3'}
                ],
                edges: [
                    {id: 'e1', source: 'n1', target: 'n2', size: 1},
                    {id: 'e2', source: 'n2', target: 'n3', size: 1},
                    {id: 'e3', source: 'n3', target: 'n1', size: 1}
                ]
            }
        })
    }

    render(){
        return(
            <OgmaContainer ogma={this.ogma}></OgmaContainer>
        );
    }
}

export default Network;
