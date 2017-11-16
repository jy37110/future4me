import React, { Component } from 'react';

export default class Loading extends Component {

    render() {
        return (
            <p style={{color:'green'}}>
                <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>
                Loading...
            </p>
        );
    }
}
