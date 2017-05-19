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
import D3bubble from './components/d3bubble';
import ProcessStrings from './components/process-strings';
import Scroll from './components/scroll';
import './index.css';

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
						<li><Link to="/d3bubble">d3 bubble</Link></li>
						<li><Link to="/process-strings">Process Strings</Link></li>
						<li><Link to="/scroll">Scroll</Link></li>

					</ul>
					<Layout>
						<Route path="/ogma" component={Network} />
						<Route path="/react-popover" component={ReactPopovers} />
						<Route path="/react-grid-library" component={Gallery} />
						<Route path="/react-reacthighcharts" component={ReactHighcharts} />
						<Route path="/react-d3" component={ReactD3} />
						<Route path="/d3plus" component={D3plus} />
						<Route path="/d3bubble" component={D3bubble} />
						<Route path="/scroll" component={Scroll} />
			    	</Layout>

		    	</div>

		    </Router>
		</div>
    );
  }
}
