import React from 'react';
import { Container, Navbar, Nav, } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom'; // Import NavLink
import { Link } from 'react-router-dom';
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
            {/* Use NavLink instead of href */}
            <Nav.Link as={NavLink} to="/" activeClassName="active" exact>
              HOME
            </Nav.Link>
            <Nav.Link as={NavLink} to="/docters" activeClassName="active">
              DOCTERS
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" activeClassName="active">
              ABOUT
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" activeClassName="active">
              CONTACT
            </Nav.Link>
          </Nav>
          <Nav className="d-none d-md-flex nav-options signup-button">
          <Link to="/signup" className="signup-button">
              Signup
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavSection;
