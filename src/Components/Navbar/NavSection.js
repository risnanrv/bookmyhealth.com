import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Logo from '../../Assets/Logo.png';
import './NavSection.css';

function NavSection() {
  const location = useLocation(); // Get the current path

  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>
          <img src={Logo} alt="Logo" className="logo-image" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-options me-auto">
            <Nav.Link
              href="/bookmyhealth.com"
              className={location.pathname === '/bookmyhealth.com' ? 'active' : ''}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="/bookmyhealth.com/docters"
              className={location.pathname === '/bookmyhealth.com/docters' ? 'active' : ''}
            >
              DOCTERS
            </Nav.Link>
            <Nav.Link
              href="/bookmyhealth.com/about"
              className={location.pathname === '/bookmyhealth.com/about' ? 'active' : ''}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="/bookmyhealth.com/contact"
              className={location.pathname === '/bookmyhealth.com/contact' ? 'active' : ''}
            >
              CONTACT
            </Nav.Link>
          </Nav>
          <Nav className="d-none d-md-flex nav-options signup-button">
            <button className="signup-button">SignUp</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavSection;
