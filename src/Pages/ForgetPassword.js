import React, { Component } from 'react';
import {Grid, Row } from 'react-bootstrap';
import Validator from '../Module/Validator';
import ServerInfo from '../Module/ServerInfo';
import Loading from '../Components/Loading';
import $ from 'jquery';

export default class ForgetPassword extends Component {
    constructor(props){
        super(props);
        this.email = "";
        this.state = {
            loading:false,
            err:false,
            errMsg:""
        }
    }

    handleEmailChange = (e) => {
        this.setState({err:false,errMsg:""});
        this.email = e.target.value;
    };

    handleSubmit = () => {
        if (Validator.validateEmail(this.email)) {
            this.setState({loading:true});
            this.ajax();
        } else {
            this.setState({err:true,errMsg:"您输入的email地址不正确，请重新输入。"})
        }
    };

    ajax = () => {
        let url = ServerInfo.getServerControllerStr() + "forgetPasswordController.php?email=" + this.email;
        $.ajax({
            url: url,
            type:'GET',
            dataType: 'JSON',
            cache: false,
            success: function(data) {
                if(data.success){
                    window.location = "#/redirect/ForgetPasswordRedirect";
                } else {
                    this.setState({err:true,errMsg:data.msg,loading:false});
                }
            }.bind(this),
            error: function(xhr,err){
                console.log(xhr);
                console.log(err);
                alert("err:" + JSON.stringify(xhr));
                this.setState({loading:false})
            }.bind(this),
        });
    };

    render() {
        const errMsg = <p style={{color:'red'}}>{this.state.errMsg}</p>;
        return (
            <Grid>
                <Row>
                    <div style={{marginLeft:'20%',marginRight:'20%',textAlign:'left'}}>
                        <form action="#" method="post">
                            <p style={{fontWeight:'bold',marginTop:20}}>请输入用于找回密码的Email地址</p>
                            <input className="form-control" type="email" onChange={this.handleEmailChange} style={{width:"90%",marginBottom:10}}/>
                            {this.state.loading ? <Loading/> : null}
                            {this.state.err ? errMsg : null}
                            <button type="button" className="btn btn-primary" disabled={this.state.loading} onClick={this.handleSubmit}>找回密码</button>
                        </form>
                    </div>
                </Row>
            </Grid>
        );
    }
}
