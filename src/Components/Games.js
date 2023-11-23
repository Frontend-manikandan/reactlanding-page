// CardComponent.js
import React from 'react';
import { Card } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Cards from '../Game-Images/card game.jpg';
import Cards2 from '../Game-Images/card game 2.jpg';
import Cards3 from '../Game-Images/card game 3.jpg';
import Cards4 from '../Game-Images/card game 4.jpg';
import Cards5 from '../Game-Images/card game 5.jpg';
import Cards6 from '../Game-Images/card game 6.jpg';
import Cards7 from '../Game-Images/card game 7.jpg';
import Cards8 from '../Game-Images/card game 8.jpg';
import './Navbar.css';


const CardComponent = () => {
  return (
    <div className='game'>
      <h1>Game collection</h1>
    <div className='row'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Cards} alt="Card image" />
      <Card.Body>
        <Card.Title>Racing Car</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Download Now</Button>
      </Card.Body>
    </Card>

        
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Cards2} alt="Card image" />
      <Card.Body>
        <Card.Title>Global war</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Download Now</Button>
      </Card.Body>
    </Card>

     
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Cards3} alt="Card image" />
      <Card.Body>
        <Card.Title>Fire Ball 4</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="success">Download Now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Cards4} alt="Card image" />
      <Card.Body>
        <Card.Title>Alien spaceWar</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="warning">Download Now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Cards5} alt="Card image"/>
      <Card.Body>
        <Card.Title>Adevnture missile</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
         <Button variant="danger">Download Now</Button>
      </Card.Body>
    </Card>
 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Cards6} alt="Card image" />
      <Card.Body>
        <Card.Title>Camando 5</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
       <Button variant="dark">Download Now</Button>
      </Card.Body>
    </Card>

    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Cards7} alt="Card image" />
      <Card.Body>
        <Card.Title>SuperMArio</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
       <Button variant="primary">Download Now</Button>
      </Card.Body>
    </Card>

    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Cards8} alt="Card image" />
      <Card.Body>
        <Card.Title>GTA 6</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
       <Button variant="info">Download Now</Button>
      </Card.Body>
    </Card>
    </div>
  </div>
  );
};

export default CardComponent
