import React from 'react';
import { Carousel } from 'react-bootstrap';
import pubg from '../Game-Images/pubg.jpg';
import gaming from '../Game-Images/gaming2.jpg';
import Gaming1 from '../Game-Images/gaming1.jpg';
import Gaming2 from '../Game-Images/gaming.jpg';
import Gaming3 from '../Game-Images/gaming3.jpg';
import './Navbar.css';



const Carouselcomponents = () => {
  return (
    <Carousel className='divider'>
      <Carousel.Item>
        <img  className="d-block w-100" src={pubg} alt='Insert Gaming image'/>
        <Carousel.Caption>
          <h3>Gaming Community</h3>
          <p>Welcome to our site.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img  className="d-block w-100" src={gaming} alt='Insert Gaming image'/>
        <Carousel.Caption>
          <h3>Gaming Community</h3>
          <p>Welcome to our site.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img  className="d-block w-100" src={Gaming1} alt='Insert Gaming image'/>
        <Carousel.Caption>
          <h3>Gaming Coummnity</h3>
          <p>Welcome to our site.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img  className="d-block w-100" 
         src={Gaming2}
         alt='Insert Gaming image'/>
        <Carousel.Caption>
          <h3>Gaming Community</h3>
          <p>Welcome to our site</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img  className="d-block w-100" src={Gaming3} alt='Insert Gaming image'/>
        <Carousel.Caption>
          <h3>Gaming Community</h3>
          <p>Welcome to our site.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
};

export default Carouselcomponents;
