import React from 'react';

class MyOption extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MyOption';
    }
    render() {
        return <div>{this.props.value}</div>;
    }
}

export default MyOption;
