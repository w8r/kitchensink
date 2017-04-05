import React, { Component } from "react";
import { Card, CardBlock, CardTitle } from "reactstrap";
import SampleData from './data.json';
import rd3 from 'rd3';
import _ from 'lodash';
import './styles.css';

export default class D3Treemap extends Component {
	constructor(){
		super();
		this.loadData = this.loadData.bind(this);
		this.renameKeys = this.renameKeys.bind(this);
		this.fitToParentSize = this.fitToParentSize.bind(this);
		this.state = {
			data: [],
			size: { w: 0, h: 0 }
		}
	}

	componentDidMount(){
		this.loadData();
		window.addEventListener('resize', this.fitToParentSize);
		this.fitToParentSize();
	}

	// componentWillReceiveProps() {
 //        this.fitToParentSize();
 //    }

    componentWillUnMount(){
    	window.removeEventListener('resize', this.fitToParentSize);
    }

	loadData(){
		this.setState({
			data: this.renameKeys(SampleData.counts)
		})
	}

	renameKeys(series) {
        var keyMap = {
            word: "label",
            count: "value"
        };
        return series.map(function(obj) {
            return _.mapKeys(obj, function(value, key) {
                return keyMap[key];
            });
        });
    }

	fitToParentSize() {
		console.log(this.refs.wrapper.offsetHeight);
		var w = this.refs.wrapper.offsetWidth - 20;
		var h = this.refs.wrapper.offsetHeight - 20;
		var currentSize = this.state.size;
		if (w !== currentSize.w || h !== currentSize.h) {
			this.setState({
				size: { w, h }
			});
		}

	}

    render() {
    	var Treemap = rd3.Treemap;
		let width = this.props.width;
		let height = this.props.height;
		width = this.state.size.w || 100;
		height = this.state.size.h || 100;
        return (
			<div className="chart-wrapper" ref="wrapper">
				 <Treemap
                    width={width}
                    height={height}
                    data={this.state.data}
                    textColor="#484848"
                    fontColor="12px"
                    hoverAnimation={true}
                />
			</div>
        );
    }
}
