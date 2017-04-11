import React, { Component } from 'react';
import processString from 'react-process-string';

export default class ProcessStrings extends Component {
	render(){
		let config = [{
		    regex: /(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,
		    fn: function(key, result){
		    		console.log(result);
		    		return(
    					<span key={key}>
                             <a target="_blank" href={`${result[1]}://${result[2]}.${result[3]}${result[4]}`}>{result[2]}.{result[3]}{result[4]}</a>{result[5]}
                         </span>
		            );
		        }
		}, {
		    regex: /(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,
		    fn: function (key, result) {
		    	console.log(result);
		    	return(
					<span key={key}>
                         <a target="_blank" href={`http://${result[1]}.${result[2]}${result[3]}`}>{result[1]}.{result[2]}{result[3]}</a>{result[4]}
                     </span>
		    	);
		    }
		}];

		let stringWithLinks = "Watch this on youtube.com and www.facebook.com and https://t.co/KZlUjib2A7";
		let processed = processString(config)(stringWithLinks);

		return(
			<div>
				Process Strings
				{processed}
			</div>
		)
	}
}
