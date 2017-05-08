import React, { Component } from 'react';
import { ScrollIntoView } from 'rrc';

const FAQ = (props) => (
	<div>
		<ScrollIntoView id={props.location.hash} />
		<div id='who'>...</div>
		<div id='what'>...</div>
		<div id='where'>...</div>
		<div id='when'>...</div>
		<div id='why'>...</div>
		<div id='how'>...</div>
	</div>
)

export default FAQ;
