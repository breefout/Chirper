import React from 'react';

export default class Chirp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div class="card">{this.props.message}</div>
    }
}