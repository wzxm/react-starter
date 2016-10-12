import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom';

import Hello from './components/Hello';
import About from './components/About/about';
import Repos from './components/Repos/repos';


render((
	<Router history={hashHistory}>
		<Route path="/" component={About} />
		<Route path="/about" component={About} />
	  	<Route path="/repos" component={Repos} />
	  	<Route path="/hello" component={Hello} />
	</Router>
), document.getElementById('reactEntry'));