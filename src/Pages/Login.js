import React, { Component } from 'react';
import {Grid, Row } from 'react-bootstrap';
import $ from 'jquery';
//import passwordHash from 'password-hash';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.email = "";
        this.psd = "";
        this.hashedPsd = "";
        this.state = {
            err:false,
            errMsg:""
        }
    }

    handleEmailChange = (e) => {
        this.email = e.target.value;
    };

    handlePsdChange = (e) => {
        this.psd = e.target.value;
    };

    handleLoginClick = () => {
        //alert (this.email + '\n' + this.psd);
        this.hashedPsd = this.psd;
        this.ajax();
    };

    handleRegisterClick = () => {
        window.location = "/register"
    };

    handleForgetPasswordClick = () => {
        alert("forget password is constructing")
    };

    ajax = () => {
        let url = "http://www.future4me.net/src/controller/loginController.php?email=" + this.email + "&psd=" + this.hashedPsd;
        $.ajax({
            url: url,
            type:'POST',
            dataType: 'JSON',
            cache: false,
            success: function(data) {
                if(data.success){
                    window.location = "#/redirectLogin";
                } else {
                    this.setState({err:true,errMsg:data.msg});
                    console.log(data);
                }
            }.bind(this),
            error: function(xhr,err){
                console.log(xhr);
                console.log(err);
                alert(JSON.stringify(xhr))
            },
        });
    };

    render() {
        const errMsg = <p style={{color:'red'}}>{this.state.errMsg}</p>

        return (
            <Grid>
                <Row>
                    <div style={{marginLeft:'20%',marginRight:'20%',textAlign:'left'}}>
                        <form action="#" method="post">
                            <p style={{fontWeight:'bold',marginTop:20}}>欢迎登陆</p>

                            <p>E-mail</p>
                            <input className="form-control" type="email" onChange={this.handleEmailChange} style={{width:"100%",marginBottom:10}}/>

                            <p>密码</p>
                            <input className="form-control" type="password" onChange={this.handlePsdChange} style={{width:"100%",marginBottom:20}}/>
                            {this.state.err ? errMsg : null}

                            <button type="button" className="btn btn-primary" onClick={this.handleLoginClick} style={{}}>登陆</button>
                            <button type="button" className="btn btn-default" onClick={this.handleRegisterClick} style={{marginLeft:10}}>注册</button>
                            <button type="button" className="btn btn-default" onClick={this.handleForgetPasswordClick} style={{marginLeft:10}}>忘记密码</button>

                        </form>
                    </div>
                </Row>
            </Grid>

        );
    }
}
