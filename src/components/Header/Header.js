import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
      return (
            <div>
                  <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Testy Food</Navbar.Brand>
    <Nav className="">
      <Link className='item' to='/'>Home</Link>
      <Link className='item' to='/food'>Food</Link>
      <Link className='item' to='/contact'>Contact</Link>
      <Link className='item' to='/about'>About</Link>
    </Nav>
    </Container>
  </Navbar>
  
</>
            </div>
      );
};

export default Header;