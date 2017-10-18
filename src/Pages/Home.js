import React, { Component } from 'react';
import MyCarousel from '../Components/MyCarousel';
import AboutNZ from '../Components/AboutNZ';

class Home extends Component {
    constructor(props){
        super(props);
        this.imageArr = [
            {url:"http://via.placeholder.com/1920x500",title:"First slide label",description:"Nulla vitae elit libero, a pharetra augue mollis interdum."},
            {url:"http://via.placeholder.com/1920x500",title:"Second slide label",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
            {url:"http://via.placeholder.com/1920x500",title:"Third slide label",description:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
        ];
        this.aboutNZInfo = [
            {frontUrl:"/Images/250X250Example.png",backUrl:"http://via.placeholder.com/250x250",title:"Important Title 1",description:"Some description: Nulla vitae elit libero, a pharetra augue mollis interdum."},
            {frontUrl:"/Images/250X250Example.png",backUrl:"http://via.placeholder.com/250x250",title:"Important Title 2",description:"Some description: Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
            {frontUrl:"/Images/250X250Example.png",backUrl:"http://via.placeholder.com/250x250",title:"Important Title 3",description:"Some description: Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
            {frontUrl:"/Images/250X250Example.png",backUrl:"http://via.placeholder.com/250x250",title:"Important Title 4",description:"Some description: Bal"},
        ]
    }
    render() {
        return (
            <div className="HomePageContainer">
                <MyCarousel
                    width={'100%'}
                    height={500}
                    imageArr={this.imageArr}
                />
                <div className="row">
                    <AboutNZ
                    contentObjArr={this.aboutNZInfo}
                    />
                </div>
            </div>
        );
    }
}

export default Home;