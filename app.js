import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom';

import Hello from './src/public/components/Hello/hello';
import About from './src/public/components/About/about';
import Repos from './src/public/components/Repos/repos';


render((
	<Router history={hashHistory}>
		<Route path="/" component={About} />
		<Route path="/about" component={About} />
	  	<Route path="/repos" component={Repos} />
	  	<Route path="/hello" component={Hello} />
	</Router>
), document.getElementById('reactEntry'));