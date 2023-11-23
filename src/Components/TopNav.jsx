import React, { useState } from 'react';
import {Nav,Navbar,Button} from 'react-bootstrap'
import {Link} from "react-router-dom";
import './Navbar.css';
import Logo from '../Game-Images/mafia.jpg';


const TopNav = () => {
  const [expanded, setExpanded] = useState(false);

  return ( 
    <div className='fluid'>
     <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse id="responsive-navbar-nav" className={`${expanded ? 'show' : ''}`}>

       <img variant="top" src={Logo} alt='Insert your Image'/>
        <Navbar.Brand as={Link} to='./TopNav'>Gaming community</Navbar.Brand>

          <Nav className="mr-auto">
            <Nav.Link as={Link} to='/home'><i class="fa fa-home"></i>Home</Nav.Link>
            <Nav.Link as={Link} to='/game'><i class="fa fa-folder-open"></i>Games</Nav.Link>
            <Nav.Link as={Link} to='/Forum'><i class="fa fa-user"></i>Forum</Nav.Link>
            <Nav.Link as={Link} to='./contact'><i class="fa fa-user"></i>Contact</Nav.Link>
            <Nav.Link as={Link} to='./event'>Event</Nav.Link>
          </Nav>
          <Nav className='ps-5 col-md-3'>
            <Button variant='primary' as={Link} to='./signup'>Signup</Button>
          </Nav>
        </Navbar.Collapse> 
      </Navbar>
      <br/>
    </div>
  );
}

export default TopNav;