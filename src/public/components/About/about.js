import React from 'react';
import { Link } from 'react-router';

class about extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'about';
    }
    render() {
        return (
        	<div>
	        	<ul role="nav">
        			<li><Link to="/hello">Hello</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/repos">Repos</Link></li>
			    </ul>
	        </div>
        );
    }
}

export default about;
