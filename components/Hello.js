import React from 'react';

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Hello';
    }
    render() {
        return <div>Hello, world</div>;
    }
}

export default Hello;
