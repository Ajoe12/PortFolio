import React from 'react';
import { Carousel } from 'react-bootstrap';
import './App.css'
import image1 from './carousal01.png';
import image2 from './carousal02.jfif';
import image3 from './carousal03.jfif';

const CarouselContainer = () => {
  return (
    <Carousel  variant="dark" style={{zIndex:"-1"}}>
      <Carousel.Item interval={2000}>
        <img
          className="caimg"
          src={image1}
          alt="First slide"
          style={{display: 'block',  marginLeft: 'auto',  marginRight: 'auto'}}
        />
        <Carousel.Caption>
        
          <h2><strong>Max-Fit WebPage</strong></h2>
          <p>Webpage for Fitness </p>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="caimg"
          src={image2}
          alt="Third slide"
          style={{display: 'block',  marginLeft: 'auto',  marginRight: 'auto'}}

        />
        <Carousel.Caption>
        <h2><strong>Covid Live Tracker</strong></h2>
          <p>WebPage by Covid api</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="caimg"
          src={image3}
          alt="Third slide"
          style={{display: 'block',  marginLeft: 'auto',  marginRight: 'auto'}}
        />
        <Carousel.Caption>
          <h2><strong>Data Analysis</strong></h2>
          <p>Worked on various ML Models</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;