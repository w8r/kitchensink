import React, { Component } from 'react';
// import Home from './Home';
// import About from './About';
// import Topics from './Topics';
import Layout from './Layout';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Network from './components/ogma';

export default class App extends Component {
  render() {
    return (
		<div>
		    <h2>My Kitchensink</h2>

		    <Router>
				<Layout>
					<Route path="/" component={Network} />
		    	</Layout>
		    </Router>
		</div>
    );
  }
}
