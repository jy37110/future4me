import React, { Component } from 'react';

export default class Redirect extends Component {

    render() {
        return (
            <div className='redirectContainer'>
                <h3>{this.props.msg}</h3>
                <a href={this.props.url}>请点击这里进行跳转。。。</a>
            </div>
        );
    }
}
