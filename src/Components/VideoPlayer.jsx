import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class VideoPlayer extends Component{
    render(){
        return(
            <div className='MainBusinessContainer' style={{width:'100%',display:'flex',justifyContent:'center',backgroundColor:'white',marginTop:30,paddingBottom:30}}>
                <Grid>
                    <Row>
                        <h2 style={{marginBottom:20}}>企业宣传片</h2>

                        <Col xs={12} md={10} mdOffset={1}>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe title='1' className="embed-responsive-item" src="https://www.youtube.com/embed/K4wEI5zhHB0" style={{width:'100%'}}/>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
