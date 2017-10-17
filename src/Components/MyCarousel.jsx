import React, { Component } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';



export default class MyCarousel extends Component{
    render(){
        return(
            <div className='CarouselContainer' style={{display:'flex',justifyContent:'center'}}>
                <Carousel style={{alignItems:'center'}}>
                    {this.props.imageArr.map((item, i) => {
                        return(
                            <CarouselItem key={i}>
                                <img width={this.props.width} height={this.props.height} alt="example" src={item.url}/>
                                <div className="carousel-caption">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </CarouselItem>
                        )})}
                </Carousel>
            </div>
        )
    }
}
