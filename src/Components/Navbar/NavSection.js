import React from 'react'
import { Container, Navbar,Nav } from 'react-bootstrap';
import Logo from '../../Assets/Logo.png'
import './NavSection.css'

function NavSection() {
  return (
    <Navbar expand="md">
        <Container>

          <Navbar.Brand>
            <img src={Logo} alt='Logo' className='logo-image'></img>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className=" nav-options me-auto">
             <Nav.Link href=''>HOME</Nav.Link>
             <Nav.Link href=''>DOCTERS</Nav.Link>
             <Nav.Link href=''>ABOUT</Nav.Link>
             <Nav.Link href=''>CONTACT</Nav.Link>
            </Nav>
            <Nav className=" nav-options signup-button">
              <button className="signup-button">SignUp</button>
            </Nav >
          </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default NavSection