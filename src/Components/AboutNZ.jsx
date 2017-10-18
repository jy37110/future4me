import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import EachItemOfAboutNZ from './EachItemOfAboutNZ';


export default class AboutNZ extends Component{
    constructor(props){
        super(props);
        this.state={
            displayDetail:false,
            detailIndex:0,
        }
    }
    handleImageClick = (key) => {
        if(this.state.detailIndex === key){
            this.setState({displayDetail:!this.state.displayDetail})
        } else {
            this.setState({
                displayDetail:true,
                detailIndex:key,
            })
        }
    };

    renderDetal = () => {
        if (this.state.displayDetail) {
            return (
                <div>
                    <h2>{this.props.contentObjArr[this.state.detailIndex].title}</h2>
                    <h3>{this.props.contentObjArr[this.state.detailIndex].description}</h3>
                </div>
            )
        }
    };

    render(){
        return(
            <div className='AboutNZContainer' style={{display:'flex',justifyContent:'center',backgroundColor:'rgb(240,240,240)',paddingBottom:30}}>
                <Grid>
                    <Row>
                        <h2 style={{marginBottom:20}}>关于新西兰</h2>
                    </Row>
                    <Row>
                        <EachItemOfAboutNZ
                            index={0}
                            frontUrl={this.props.contentObjArr[0].frontUrl}
                            backUrl={this.props.contentObjArr[0].backUrl}
                            imageClick={this.handleImageClick}
                        />
                        <EachItemOfAboutNZ
                            index={1}
                            frontUrl={this.props.contentObjArr[1].frontUrl}
                            backUrl={this.props.contentObjArr[1].backUrl}
                            imageClick={this.handleImageClick}
                        />
                        <EachItemOfAboutNZ
                            index={2}
                            frontUrl={this.props.contentObjArr[2].frontUrl}
                            backUrl={this.props.contentObjArr[2].backUrl}
                            imageClick={this.handleImageClick}
                        />
                        <EachItemOfAboutNZ
                            index={3}
                            frontUrl={this.props.contentObjArr[3].frontUrl}
                            backUrl={this.props.contentObjArr[3].backUrl}
                            imageClick={this.handleImageClick}
                        />
                    </Row>
                    <Row>
                        {this.renderDetal()}
                    </Row>
                </Grid>
            </div>
        )
    }
}
