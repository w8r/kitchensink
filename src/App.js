import React, { Component } from 'react';
// import Home from './Home';
// import About from './About';
// import Topics from './Topics';
import Layout from './Layout';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Network from './components/ogma';
import Popovers from './components/popovers';

export default class App extends Component {
  render() {
    return (
		<div>
		    <h2>My Kitchensink</h2>

		    <Router>
				<Layout>
					<Route path="/ogma" component={Network} />
					<Route path="/popover" component={Popovers} />
		    	</Layout>
		    </Router>
		</div>
    );
  }
}
