import React, { Component } from 'react';
import {Grid, Row } from 'react-bootstrap';
import $ from 'jquery';
import Validator from '../Components/Validator';
import passwordHash from 'password-hash';

export default class Register extends Component {
    constructor(props){
        super(props);
        this.email = "";
        this.firstName = "";
        this.lastName = "";
        this.hashedPsd = "";
        this.psd = "";
        this.psdRepeat = "";
        this.emailPassed = false;
        this.firstNamePassed = false;
        this.lastNamePassed = false;
        this.psdPassed = false;
        this.psdRepeatPassed = false;
        this.state={
            email:false,
            firstName:false,
            lastName:false,
            psd:false,
            psdRepeat:false,
            errMsg:"",
            err:false,
        };
    }

    handleEmailChange = (e) => {
        this.email = e.target.value;
        this.validation();
    };

    handleFirstNameChange = (e) => {
        this.firstName = e.target.value;
        this.validation();
    };

    handleLastNameChange = (e) => {
        this.lastName = e.target.value;
        this.validation();
    };

    handlePsdChange = (e) => {
        this.psd = e.target.value;
        this.validation();
    };

    handlePsdRepeatChange = (e) => {
        this.psdRepeat = e.target.value;
        this.validation();
    };

    handleSubmit = () => {
        if(this.state.email && this.state.firstName && this.state.lastName && this.state.psd && this.state.psdRepeat) {
            this.hashedPsd = passwordHash.generate(this.psd);
            this.ajax();
        }
        else {
            this.setState({
                err:true,
                errMsg:"您有未通过验证的项目"
            });
        }
    };

    validation = () => {
        if (Validator.validateName(this.firstName)) {
            this.firstNamePassed = true;
            this.setState({firstName:true});
        } else {
            this.firstNamePassed = false;
            this.setState({firstName:false});
        }

        if (Validator.validateName(this.lastName)) {
            this.lastNamePassed = true;
            this.setState({lastName:true});
        } else {
            this.setState({lastName:false});
            this.lastNamePassed = false;
        }

        if (this.psdRepeat === this.psd) {
            this.setState({psdRepeat:true});
            this.psdRepeatPassed = true;
        } else {
            this.setState({psdRepeat:false});
            this.psdRepeatPassed = false;
        }

        if (Validator.validatePsd(this.psd)) {
            this.psdPassed = true;
            this.setState({psd:true});
        } else {
            this.setState({psd:false});
            this.psdPassed = false;
        }

        if (Validator.validateEmail(this.email)) {
            this.setState({email:true});
            this.emailPassed = true;
        } else {
            this.setState({email:false});
            this.emailPassed = false;
        }

        if(this.emailPassed && this.firstNamePassed && this.lastNamePassed && this.psdPassed && this.psdRepeatPassed) this.setState({err:false,errMsg:""});
        else {this.setState({err:true,errMsg:"您有未通过验证的项目"})}

    };

    ajax = () => {
        let url = "http://www.future4me.net/src/controller/registerController.php?email=" + this.email + "&psd=" + this.hashedPsd + "&firstName=" + this.firstName + "&lastName=" + this.lastName;
        $.ajax({
            url: url,
            type:'POST',
            dataType: 'JSON',
            cache: false,
            success: function(data){
                if(data.success){
                    window.location = "./redirect";
                } else {
                    this.setState({err:true,errMsg:data.msg})
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
        const errMsg = <p style={{color:'red'}}>{this.state.errMsg}</p>

        return (
            <Grid>
                <Row>
                    <div style={{marginLeft:'20%',marginRight:'20%',textAlign:'left'}}>
                        <form action="#" method="post">
                            <p style={{fontWeight:'bold',marginTop:20}}>欢迎加入我们的会员计划</p>

                            <p>E-mail:</p>
                            <Row style={{display:'flex'}}>
                                <input className="form-control" type="email" style={{width:"80%",marginBottom:10,marginLeft:10,marginRight:10}} onChange={this.handleEmailChange}/>
                                {this.state.email ? validationPassIcon : validationDenialIcon}
                            </Row>

                            <p>姓</p>
                            <Row style={{display:'flex'}}>
                                <input className="form-control" type="firstName" style={{width:"80%",marginBottom:10,marginLeft:10,marginRight:10}} onChange={this.handleFirstNameChange}/>
                                {this.state.firstName ? validationPassIcon : validationDenialIcon}
                            </Row>

                            <p>名</p>
                            <Row style={{display:'flex'}}>
                                <input className="form-control" type="lastName" style={{width:"80%",marginBottom:10,marginLeft:10,marginRight:10}} onChange={this.handleLastNameChange}/>
                                {this.state.lastName ? validationPassIcon : validationDenialIcon}
                            </Row>

                            <p>密码</p>
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
                            <button type="button" className="btn btn-primary" onClick={this.handleSubmit} style={{marginTop:10,marginLeft:0}}>提 交</button>
                        </form>
                    </div>
                </Row>
            </Grid>

        );
    }
}
