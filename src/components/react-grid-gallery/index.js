import React, { Component } from "react";
import Gallery from 'react-grid-gallery';
import SampleData from "./data.json";
import _ from 'lodash';

export default class ReactGridGallery extends Component {
	constructor(){
		super();
		this.parseImages = this.parseImages.bind(this);
		this.loadData = this.loadData.bind(this);
		this.state = {
			data: []
		}
	}

	loadData(){
		this.parseImages(SampleData);
	}

	componentDidMount(){
		this.loadData();
	}

	parseImages(SampleData){
		var parsedImages =  _.map(SampleData.tweets, function(tweets){
			return {
				src: tweets.media.url,
				thumbnail: tweets.media.url,
				thumbnailWidth: tweets.media.sizes.small.w,
				thumbnailHeight: tweets.media.sizes.small.h,
				id: tweets.id
			}
		})
		this.setState({
			data: parsedImages
		})
	}

	popoverImage (index, image) {
		console.log(index);
		var data = this.state.data;
		console.log(data);
        // var images = this.state.data.slice();
        // var img = images[index];
        // if(img.hasOwnProperty("isSelected"))
        //     img.isSelected = !img.isSelected;
        // else
        //     img.isSelected = true;

        // this.setState({
        //     data: images
        // });
    }
	render(){
		return(
			<Gallery images={this.state.data} rowHeight={75} onSelectImage={this.popoverImage}/>
		);

	}
}
