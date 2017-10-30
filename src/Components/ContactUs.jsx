import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class ContactUs extends Component{
    render(){
        return(
            <div className='MainBusinessContainer' style={{display:'flex',justifyContent:'center',backgroundColor:'rgb(240,240,240)',marginTop:30,paddingBottom:30}}>
                <Grid>
                    <Row>
                        <h2 style={{marginBottom:10}}>联系我们</h2>
                    </Row>
                    <Row>
                        <h4 style={{color:'grey'}}>商务洽谈 · 战略合作</h4>
                    </Row>
                    <Row>
                        <Col xs={6} md={4}>
                            <div style={{textAlign:'left'}}>
                               <span>
                                   <p style={{fontWeight:'bold'}}>业务咨询</p>
                                   <p>电话：+64 9 3929218</p>
                                   <p>邮箱： support@strategy4me.com</p>
                                   <p>微信： </p>
                                </span>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div style={{textAlign:'left'}}>
                               <span>
                                   <p style={{fontWeight:'bold'}}>公司地址</p>
                                   <p>Ground floor, 41 Shortland Street, Auckland</p>
                                   
                                   <img src={"/Images/map.png"} alt="570X404"/>
                                </span>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>

                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
