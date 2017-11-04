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
                        <h4 style={{color:'grey', marginBottom:20}}>商务洽谈 · 战略合作</h4>
                    </Row>
                    <Row>
                        <Col xs={3} md={3}>
                            <div style={{textAlign:'left'}}>
                               <span>
                                   <p style={{fontWeight:'bold'}}>业务咨询</p>
                                   <p>电话：+64 9 3929218</p>
                                   <p>邮箱： support@strategy4me.com</p>
                                   <p>微信： </p>
                                   <img src={"/Images/footer_1.png"} style={{width:'50%'}} alt="570X404"/>

                                </span>
                            </div>
                        </Col>
                        <Col xs={5} md={5}>
                            <div style={{textAlign:'left'}}>
                               <span>
                                   <p style={{fontWeight:'bold'}}>公司地址</p>
                                   <p>Ground floor, 41 Shortland Street, Auckland</p>

                                   <img src={"/Images/map.png"} style={{width:'100%'}} alt="570X404"/>
                                </span>
                            </div>
                        </Col>
                        <Col xs={4} md={4}>
                            <div style={{textAlign:'left',marginLeft:'10%'}}>
                               <span>
                                   <form action="#" method="post">
                                       <p style={{fontWeight:'bold'}}>在线留言</p>
                                       <p>姓名</p>
                                       <input className="form-control" type="name" style={{width:"70%",marginBottom:10}}/>
                                       <p>邮箱</p>
                                       <input className="form-control" type="email" style={{width:"70%",marginBottom:10}}/>
                                       <p>留言内容</p>
                                       <textarea className="form-control" rows='4' style={{width:"100%",marginBottom:15}}/>
                                       <button type="button" className="btn btn-primary">提交</button>
                                   </form>

                                </span>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
