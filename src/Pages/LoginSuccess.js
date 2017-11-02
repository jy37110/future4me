import React, { Component } from 'react';
import Redirect from '../Components/Redirect';

export default class LoginSuccess extends Component {
    render() {
        return (
            <Redirect msg="您已成功登陆，此处省略一万字..."/>
        );
    }
}
