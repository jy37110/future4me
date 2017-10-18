import React, { Component } from 'react';
import { Col } from 'react-bootstrap';



export default class EachItemOfAboutNZ extends Component{
    constructor(props){
        super(props);
        this.state = {
            hover:true,
        }
    }

    mouseOver = () => {
        this.setState({hover:false})
    };

    mouseOut = () => {
        this.setState({hover:true})
    };

    renderContent = () => {
        if (this.state.hover){
            return(
                <Col xs={6} md={3}>
                    <span style={{width:250,height:250,padding:0,margin:'0 auto',display:'block'}}>
                        <img src={this.props.frontUrl} alt="250X250"/>
                    </span>
                </Col>
            )
        } else {
            return(
                <Col xs={6} md={3}>
                    <span style={{width:250,height:250,padding:0,margin:'0 auto',display:'block'}}>
                        <img src={this.props.backUrl} alt="250X250"/>
                    </span>
                </Col>
            )
        }
    };

    render() {
        return(
            <div className="imageGroupContainer" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} style={{padding:0,margin:0}} onClick={() => this.props.imageClick(this.props.index)}>
                {this.renderContent()}
            </div>
        )
    };
}
