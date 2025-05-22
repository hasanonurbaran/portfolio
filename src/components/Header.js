import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const closeNav = () => setExpanded(false);

  return (
    <header className="header full-width">
      <Navbar expand="lg" variant="dark" expanded={expanded} className="navbar-custom">
        <div className="container">
          <Navbar.Brand as={Link} to="/" onClick={closeNav}>
            <div className="logo">Hasan Onur BARAN</div>
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={() => setExpanded(expanded ? false : "expanded")} 
            className="navbar-toggler-custom"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto diagoona-nav">
              <Nav.Link as={Link} to="/" onClick={closeNav}>Ana sayfa</Nav.Link>
              <Nav.Link as={Link} to="/hakkimda" onClick={closeNav}>Ben kimim?</Nav.Link>
              <Nav.Link as={Link} to="/yetenekler" onClick={closeNav}>Neler yapabilirim?</Nav.Link>
              <Nav.Link as={Link} to="/portfolyo" onClick={closeNav}>Portfolyo</Nav.Link>
              <Nav.Link as={Link} to="/iletisim" onClick={closeNav}>İletişim</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header; 