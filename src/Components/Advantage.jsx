import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Advantage extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div className='MainBusinessContainer' style={{display:'flex',justifyContent:'center',backgroundColor:'rgb(240,240,240)',marginTop:30,paddingBottom:30}}>
                <Grid>
                    <Row>
                        <h2 style={{marginBottom:20}}>马丁优势</h2>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                            <span style={{width:150,height:150,paddingTop:10,display:'block',backgroundColor:'#E88F4F',borderRadius:'50%',margin:'0 auto'}}>
                                <span className='glyphicon glyphicon-headphones' aria-hidden='true' style={{fontSize:40,paddingTop:25,color:'white'}}>
                                    <p style={{fontSize:16,color:'white',marginTop:10,fontWeight:'bold'}}>马丁优势1</p>
                                </span>
                            </span>
                            <p style={{fontSize:12,padding:25,margin:0}}>
                                我们的老师来自英语为母语的国家
                                <br/>
                                真实纯正的英文外教
                            </p>
                        </Col>
                        <Col xs={6} md={3}>
                            <span style={{width:150,height:150,paddingTop:10,display:'block',backgroundColor:'#E88F4F',borderRadius:'50%',margin:'0 auto'}}>
                                <span className='glyphicon glyphicon-user' aria-hidden='true' style={{fontSize:40,paddingTop:25,color:'white'}}>
                                    <p style={{fontSize:16,color:'white',marginTop:10,fontWeight:'bold'}}>马丁优势2</p>
                                </span>
                            </span>
                            <p style={{fontSize:12,padding:25,margin:0}}>
                                我们的老师来自英语为母语的国家
                                <br/>
                                真实纯正的英文外教
                            </p>
                        </Col>
                        <Col xs={6} md={3}>
                            <span style={{width:150,height:150,paddingTop:10,display:'block',backgroundColor:'#E88F4F',borderRadius:'50%',margin:'0 auto'}}>
                                <span className='glyphicon glyphicon-list-alt' aria-hidden='true' style={{fontSize:40,paddingTop:25,color:'white'}}>
                                    <p style={{fontSize:16,color:'white',marginTop:10,fontWeight:'bold'}}>马丁优势3</p>
                                </span>
                            </span>
                            <p style={{fontSize:12,padding:25,margin:0}}>
                                我们的老师来自英语为母语的国家
                                <br/>
                                真实纯正的英文外教
                            </p>
                        </Col>
                        <Col xs={6} md={3}>
                            <span style={{width:150,height:150,paddingTop:10,display:'block',backgroundColor:'#E88F4F',borderRadius:'50%',margin:'0 auto'}}>
                                <span className='glyphicon glyphicon-phone-alt' aria-hidden='true' style={{fontSize:40,paddingTop:25,color:'white'}}>
                                    <p style={{fontSize:16,color:'white',marginTop:10,fontWeight:'bold'}}>马丁优势4</p>
                                </span>
                            </span>
                            <p style={{fontSize:12,padding:25,margin:0}}>
                                我们的老师来自英语为母语的国家
                                <br/>
                                真实纯正的英文外教
                            </p>
                        </Col>
                    </Row>

                </Grid>
            </div>
        )
    }
}
