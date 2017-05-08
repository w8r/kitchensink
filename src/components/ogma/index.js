import React, { Component } from "react";
import Ogma from "../../js/vendor/ogma@1.6.6/ogma.min.js";
import SampleData from './data.json';
import solarcityData from './solarCity.json';
import OgmaContainer from './OgmaContainer';
import _ from 'lodash';

class Network extends Component {

    constructor(){
        super();
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
            graph: solarcityData
        })

        this.ogma.tooltip.onNodeClick(function(node){
            console.log(node);
            var html = "<div>test</div>";
            return html
        })

    }


    render(){
        return(
            <OgmaContainer ogma={this.ogma} hover={this.ogma.tooltip.oNodeHover}></OgmaContainer>
        );
    }
}

export default Network;
