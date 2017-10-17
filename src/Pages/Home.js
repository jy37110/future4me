import React, { Component } from 'react';
import MyCarousel from '../Components/MyCarousel';

class Home extends Component {
    constructor(props){
        super(props);
        this.imageArr = [
            {url:"http://via.placeholder.com/1920x500",title:"First slide label",description:"Nulla vitae elit libero, a pharetra augue mollis interdum."},
            {url:"http://via.placeholder.com/1920x500",title:"Second slide label",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
            {url:"http://via.placeholder.com/1920x500",title:"Third slide label",description:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
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
            </div>
        );
    }
}

export default Home;