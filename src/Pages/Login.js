import React, { Component } from 'react';
import {Grid, Row } from 'react-bootstrap';

export default class Login extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <div style={{marginLeft:'20%',marginRight:'20%',textAlign:'left'}}>
                        <form action="#" method="post">
                            <p style={{fontWeight:'bold',marginTop:20}}>欢迎登陆</p>
                            <p>E-mail</p>
                            <input className="form-control" type="email" style={{width:"100%",marginBottom:10}}/>
                            <p>密码</p>
                            <input className="form-control" type="password" style={{width:"100%",marginBottom:20}}/>
                            <button type="button" className="btn btn-primary" style={{}}>登陆</button>
                            <button type="button" className="btn btn-default" style={{marginLeft:10}}>注册</button>
                            <button type="button" className="btn btn-default" style={{marginLeft:10}}>忘记密码</button>
                        </form>
                    </div>
                </Row>
            </Grid>

        );
    }
}
