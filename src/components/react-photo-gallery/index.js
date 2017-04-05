import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import SampleData from '../react-grid-gallery/data.json';
import _ from 'lodash';

export default class ReactPhotoGallery extends Component {
	constructor(){
		super();
		this.loadData = this.loadData.bind(this);
		this.parseImages = this.parseImages.bind(this);
		this.openPopover = this.openPopover.bind(this);
		this.state = {
			data: []
		}
	}

	componentDidMount(){
		this.loadData();
	}

	loadData(){
		// console.log(SampleData);
		this.parseImages(SampleData);
		// this.setState({
		// 	data: SampleData.tweets.media
		// })
	}

	parseImages(SampleData){
		var parsedImages =  _.map(SampleData.tweets, function(tweets){
			return {
				src: tweets.media.url,
				width: tweets.media.sizes.small.w,
				height: tweets.media.sizes.small.h,
				id: tweets.id
			}
		})
		this.setState({
			data: parsedImages
		})
	}

	openPopover(index){
		console.log(index);
		// console.log('open popover for tweeter id ' + index);
	}

	renderGallery(){
		return(
			<div>
				Gallery should go here
				<Gallery photos={this.state.data} cols={5} onClickPhoto={this.openPopover}/>
			</div>
			
		);
	}
	render(){
		return(
			<div>
				React Photo Gallery
				{this.renderGallery()}
			</div>
		);
	}
}