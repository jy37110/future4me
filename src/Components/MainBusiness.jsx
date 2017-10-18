import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class MainBusiness extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        return(
            <div className='MainBusinessContainer' style={{display:'flex',justifyContent:'center',backgroundColor:'white',marginTop:10,paddingBottom:30}}>
                <Grid>
                    <Row>
                        <h2 style={{marginBottom:20}}>主营业务</h2>
                    </Row>
                    <Row>
                        <Col xs={6} md={4}>
                            <span style={{width:290,height:168,padding:0,display:'block',margin:'0 auto'}}>
                                <img src="http://via.placeholder.com/290x168" alt="290X168"/>
                                <div style={{backgroundColor:'rgb(240,240,240)',height:50}}>
                                    <p style={{position:'relative',top:15}}>主营业务1</p>
                                </div>
                            </span>
                        </Col>

                        <Col xs={6} md={4}>
                            <span style={{width:290,height:168,padding:0,display:'block',margin:'0 auto'}}>
                                <img src="http://via.placeholder.com/290x168" alt="290X168"/>
                                <div style={{backgroundColor:'rgb(240,240,240)',height:50}}>
                                    <p style={{position:'relative',top:15}}>主营业务2</p>
                                </div>
                            </span>
                        </Col>

                        <Col xs={6} md={4}>
                            <span style={{width:290,height:168,padding:0,display:'block',margin:'0 auto'}}>
                                <img src="http://via.placeholder.com/290x168" alt="290X168"/>
                                <div style={{backgroundColor:'rgb(240,240,240)',height:50}}>
                                    <p style={{position:'relative',top:15}}>主营业务3</p>
                                </div>
                            </span>
                        </Col>

                    </Row>

                </Grid>
            </div>
        )
    }
}
