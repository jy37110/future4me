import React, { Component } from 'react';
import {Grid, Row } from 'react-bootstrap';

export default class Register extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <div style={{marginLeft:'20%',marginRight:'20%',textAlign:'left'}}>
                        <form action="#" method="post">
                            <p style={{fontWeight:'bold',marginTop:20}}>欢迎加入我们的会员计划</p>
                            <p>E-mail</p>
                            <input className="form-control" type="email" style={{width:"100%",marginBottom:10}}/>
                            <p>姓</p>
                            <input className="form-control" type="firstName" style={{width:"100%",marginBottom:10}}/>
                            <p>名</p>
                            <input className="form-control" type="lastName" style={{width:"100%",marginBottom:10}}/>
                            <p>密码</p>
                            <input className="form-control" type="password" style={{width:"100%",marginBottom:10}}/>
                            <p>密码重复</p>
                            <input className="form-control" type="password" style={{width:"100%",marginBottom:10}}/>
                            <button type="button" className="btn btn-primary">提交</button>
                        </form>
                    </div>
                </Row>
            </Grid>

        );
    }
}
