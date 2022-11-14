import React from 'react';
import './Services.css';
import {Carousel } from 'react-bootstrap';

const Services = () => {
    return (
        <section className="service-container">
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1403809665/photo/aircraft-engineers-examining-helicopter-engine-with-multimeter-close-up.jpg?b=1&s=170667a&w=0&k=20&c=oAgeOaZyfW1kFdV9PAljC7Os9mLVcV-bD8FCgGUeAoU="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1295981558/photo/men-industrial-engineer-wearing-a-white-helmet-while-standing-in-a-heavy-industrial-factory.jpg?b=1&s=170667a&w=0&k=20&c=elt1mKZagGbcSVQR8XjmkoGQA2crdQb3luy8agAdcfY="
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1352825038/photo/professional-male-automotive-engineer-wearing-hard-hat-walking-using-laptop-monitoring.jpg?b=1&s=170667a&w=0&k=20&c=tT2OqQMFqqNGFqqvXnR_s1GosM54uMSBFB6lUyo6q8Y="
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </section>
    );
};

export default Services;