import React, { Component } from 'react';
import Redirect from '../Components/Redirect';

export default class RedirectPage extends Component {
    constructor(props) {
        super(props);
        this.type = this.props.match.params.type;
        this.msg = "";
        this.url = "/#";
        console.log(this.props);
        switch(this.type){
            case "LoginSuccess":
                this.msg = "您已成功登陆，此处省略一万字...";
                break;
            case "RegisterSuccess":
                this.msg = "感谢您的注册，此处省略一万字...";
                break;
            case "ForgetPasswordRedirect":
                this.msg = "您的密码重设请求已成功发送，请登陆您的邮箱并按提示重新设置您的密码。此处省略一万字...";
                break;
            case "ResetPasswordSuccess":
                this.msg = "您的密码已重置成功，请使用新的密码进行登陆。此处省略一万字";
                this.url = "/#/login";
                break;
            case "LogoutSuccess":
                this.msg = "您已成功退出登陆。此处省略一万字";
                this.url = "/#/login";
                break;
            default:
                this.msg = "您请求的页面没有找到";
        }
    }
    render() {
        return (
            <Redirect msg={this.msg} url={this.url}/>
        );
    }
}
