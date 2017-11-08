import React, { Component } from 'react';
import {Grid, Row } from 'react-bootstrap';
import Validator from '../Module/Validator';
import ServerInfo from '../Module/ServerInfo';
import $ from 'jquery';

export default class ResetPassword extends Component {
    constructor(props){
        super(props);
        this.email = this.props.match.params.id;
        this.path = this.props.location.pathname;
        this.psd = this.path.substring(this.path.indexOf(';') + 1,this.path.length);
        this.newPsd = "";
        this.newPsdRepeat = "";
        this.psdPassed = false;
        this.psdRepeatPassed = false;
        this.state = {
            psdRepeat:false,
            psd:false,
            err:false,
            errMsg:""
        }
    }

    handleEmailChange = (e) => {
        this.setState({err:false,errMsg:""});
        this.email = e.target.value;
    };

    handleSubmit = () => {
        if (this.psdRepeatPassed && this.psdPassed) {
            this.ajax();
        } else {
            this.setState({err:true,errMsg:"您有未通过验证的项目"})
        }
    };

    handlePsdChange = (e) => {
        this.newPsd = e.target.value;
        this.validation();
    };

    handlePsdRepeatChange = (e) => {
        this.newPsdRepeat = e.target.value;
        this.validation();
    };

    validation = () => {
        if (this.newPsdRepeat === this.newPsd) {
            this.psdRepeatPassed = true;
            this.setState({psdRepeat:true});
        } else {
            this.psdRepeatPassed = false;
            this.setState({psdRepeat:false});
        }
        if (Validator.validatePsd(this.newPsd)) {
            this.psdPassed = true;
            this.setState({psd:true});
        } else {
            this.psdPassed = false;
            this.setState({psd:false});
        }

        if(this.psdPassed && this.psdRepeatPassed) this.setState({err:false,errMsg:""});
        else {this.setState({err:true,errMsg:"您有未通过验证的项目"})}
    };

    ajax = () => {
        let url = ServerInfo.getServerControllerStr() + "resetPasswordController.php?email=" + this.email + "&psd=" + this.psd + "&newPsd=" + this.newPsd;
        $.ajax({
            url: url,
            type:'GET',
            dataType: 'JSON',
            cache: false,
            success: function(data) {
                if(data.success){
                    console.log(data);
                    window.location = "#/redirect/ResetPasswordSuccess";
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
        const validationPassIcon = <span className="glyphicon glyphicon-ok-circle" style={{fontSize:30,color:'green'}}></span>
        const validationDenialIcon = <span className="glyphicon glyphicon-remove-circle" style={{fontSize:30,color:'red'}}></span>
        const errMsg = <p style={{color:'red'}}>{this.state.errMsg}</p>;

        return (
            <Grid>
                <Row>
                    <div style={{marginLeft:'20%',marginRight:'20%',textAlign:'left'}}>
                        <form action="#" method="post">
                            <p style={{fontWeight:'bold',marginTop:20}}>重新设置新密码</p>
                            <p>新密码</p>
                            <Row style={{display:'flex'}}>
                                <input className="form-control" type="password" style={{width:"80%",marginBottom:10,marginLeft:10,marginRight:10}} onChange={this.handlePsdChange}/>
                                {this.state.psd ? validationPassIcon : validationDenialIcon}
                            </Row>
                            <p>密码重复</p>
                            <Row style={{display:'flex'}}>
                                <input className="form-control" type="password" style={{width:"80%",marginBottom:10,marginLeft:10,marginRight:10}} onChange={this.handlePsdRepeatChange}/>
                                {this.state.psdRepeat ? validationPassIcon : validationDenialIcon}
                            </Row>
                            {this.state.err ? errMsg : null}
                            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>重设密码</button>
                        </form>
                    </div>
                </Row>
            </Grid>
        );
    }
}
