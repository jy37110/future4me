import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

export default class ContactUs extends Component{
    render(){
        return(
            <div className='MainBusinessContainer' style={{display:'flex',justifyContent:'center',backgroundColor:'rgb(240,240,240)',marginTop:30,paddingBottom:30}}>
                <Grid>
                    <Row>
                        <h2 style={{marginBottom:20}}>联系我们</h2>
                    </Row>
                    <Row>

                    </Row>
                </Grid>
            </div>
        )
    }
}
