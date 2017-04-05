import React, { Component } from 'react';
import {Treemap} from "d3plus-react";
import SampleData from '../react-d3/data.json';
import _ from 'lodash';



export default class D3plus extends Component {
	constructor(){
		super();
		this.loadData = this.loadData.bind(this);
		this.renameKeys = this.renameKeys.bind(this);
		// this.fitToParentSize = this.fitToParentSize.bind(this);
		this.state = {
			data: []
		}
	}

	componentDidMount(){
		this.loadData();
		// window.addEventListener('resize', this.fitToParentSize);
		// this.fitToParentSize();
	}

	loadData(){
		this.setState({
			data: this.renameKeys(SampleData.counts)
		})
	}

	renameKeys(series) {
        var keyMap = {
            word: "id",
            count: "value"
        };
        return series.map(function(obj) {
            return _.mapKeys(obj, function(value, key) {
                return keyMap[key];
            });
        });
    }

	render(){
		const config = {
			data: this.state.data,
			height: 400,
			legend: false
		}

		return(
			<Treemap 
				config={{config}} />
		);
	}
}