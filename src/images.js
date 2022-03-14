import React from 'react';
import './images.css';
import { Carousel } from 'react-bootstrap';

function ImageGallery() {
  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/7031616/pexels-photo-7031616.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Ferrer Drywall</h1>
      <h2>Proudly serving the triad area for over 20 years!</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 id='imageCaptions'>Drywall Installation and Repairs</h3>
      <p id='imageCaptions'>New construction and older home remodels.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 id='imageCaptions'>Residential Painting</h3>
      <p id='imageCaptions'>We offer interior and exterior painting for homes of any size.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default ImageGallery;