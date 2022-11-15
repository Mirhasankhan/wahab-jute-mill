import React from 'react';
import './Services.css';
import { Carousel } from 'react-bootstrap';

const Services = () => {
  return (
    <section className="service-container">
      <Carousel>
        <Carousel.Item>
          <img style={{ height: '500px' }}
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1403809665/photo/aircraft-engineers-examining-helicopter-engine-with-multimeter-close-up.jpg?b=1&s=170667a&w=0&k=20&c=oAgeOaZyfW1kFdV9PAljC7Os9mLVcV-bD8FCgGUeAoU="
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ fontWeight: '900', color: 'black' }}>Precise Created Only For You</h3>
            <h3 style={{ fontSize: '80px', color: '#E9620D' }}>Interior Solution</h3>
            <p style={{ fontWeight: '900', color: 'black' }}>If you are looking for blank lorem ipsum<br />sit amet</p>
            <button className="explore-button">Explore More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '500px' }}
            className="d-block w-100"
            src="https://plus.unsplash.com/premium_photo-1663054710563-598f084bdd42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGVuZ2luZWVyaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
          />

          <Carousel.Caption>

            <h3 style={{ fontWeight: '900', color: 'white', textAlign: 'right' }}>Precise Created Only For You</h3>
            <h3 style={{ fontWeight: '900', fontSize: '80px', color: '#E9620D', textAlign: 'right' }}>Total Architecture</h3>
            <p style={{ fontWeight: '900', color: 'white', textAlign: 'right' }}>If you are looking for blank lorem ipsum<br />sit amet</p>
            <button className="explore-button" style={{ alignItems: 'right' }}>Explore More</button>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '500px' }}
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1330168130/photo/engineer-meeting-for-an-architectural-project-working-with-partner-and-engineering-tools.jpg?b=1&s=170667a&w=0&k=20&c=8eHdQ6ttlrsPBQR4AOOHESj5OEnUJh4pYCVzv2IL2AE="
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontWeight: '900', color: 'white', textAlign: 'left' }}>Precise Created Only For You</h3>
            <h3 style={{ fontSize: '80px', color: '#06E978', textAlign: 'left' }}>Total Architecture</h3>
            <p style={{ fontWeight: '900', color: 'red', textAlign: 'left' }}>If you are looking for blank lorem ipsum<br />sit amet</p>
            <button className="explore-button">Explore More</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </section>
  );
};

export default Services;