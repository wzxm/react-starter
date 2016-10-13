import React from 'react';

class MyOption extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MyOption';
    }
    render() {
    	var selectedStyle = {backgroundColor: 'red', color:'#fff', cursor:'pointer'}
    	var unSelectedStyle = {cursor:'pointer'};
    	var flag = this.props.value === this.props.state;
        return (
        	<div>
        		<div className={flag ? '' : 'hide'} style={selectedStyle} onClick={this.props.select}>{this.props.value}</div>
        		<div className={flag ? 'hide' : ''} style={unSelectedStyle} onClick={this.props.select}>{this.props.value}</div>
        	</div>
        )
    }
}

export default MyOption;
