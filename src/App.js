import React, { Component } from 'react';
// import Home from './Home';
// import About from './About';
// import Topics from './Topics';
import Layout from './Layout';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Network from './components/ogma';
import ReactPopovers from './components/popovers';
import Gallery from './components/react-grid-gallery';
import ReactPhotoGallery from './components/react-photo-gallery';
import ReactHighcharts from './components/react-highcharts';
import ReactD3 from './components/react-d3';
import D3plus from './components/d3plus';

export default class App extends Component {
  render() {
    return (
		<div>
		    <h2>My Kitchensink</h2>
			

		    <Router>
		    	<div>
		    		<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/ogma">Ogma</Link></li>
						<li><Link to="/react-popover">react-popover</Link></li>
						<li><Link to="/react-grid-library">react-grid-gallery</Link></li>
						<li><Link to="/react-photo-gallery">react-photo-gallery</Link></li>
						<li><Link to="/react-reacthighcharts">react-reacthighcharts</Link></li>
						<li><Link to="/react-d3">react d3 treemap</Link></li>
						<li><Link to="/d3plus">d3plus treemap</Link></li>

					</ul>
					<Layout>
						<Route path="/ogma" component={Network} />
						<Route path="/react-popover" component={ReactPopovers} />
						<Route path="/react-grid-library" component={Gallery} />
						<Route path="/react-reacthighcharts" component={ReactHighcharts} />
						<Route path="/react-d3" component={ReactD3} />
						<Route path="/d3plus" component={D3plus} />
			    	</Layout>
		    		
		    	</div>
		    	
		    </Router>
		</div>
    );
  }
}
