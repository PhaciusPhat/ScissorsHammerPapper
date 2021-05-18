import React, { Component } from 'react';

class Tool extends Component {
    render() {
        const {tool} = this.props;
        return <img src={tool.imgSrc} width={200} height={200} alt="" />;
    }
}

export default Tool;