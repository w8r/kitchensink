import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ScrollIntoView } from 'rrc';

const BasicExample = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/topics">Topics</Link></li>
				<li><Link to="/#scroll">Foo</Link></li>

			</ul>

			<hr/>

			<Route exact path="/" component={Home} />
			<Route path="/topics" component={Topics} />
			<Route path="/about" component={About} />
			<Route path='/foo' component={Foo} />
		</div>
	</Router>
)

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
)

const About = () => (
	<div>
		<h2>About</h2>
	</div>
)

const Topics = () => (
	<div>
		<h2>Topics</h2>
	</div>
)

const Foo = (props) => (
  <ScrollIntoView id={props.location.hash}>
    <div>
      <h1>My View</h1>
      <div id='scroll'>Scroll to me!</div>
    </div>
  </ScrollIntoView>
)

export default BasicExample;
