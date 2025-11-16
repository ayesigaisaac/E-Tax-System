import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap';

const NavBar = () => {
  // Placeholder user info; replace with auth state when available
  const user = { name: 'John Doe' };

  return (
    <Navbar expand="lg" bg="white" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
      <Container>
        <Navbar.Brand as={Link} to="/dashboard" className="d-flex align-items-center">
          <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--brand-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 10, fontWeight: 700 }}>
            ET
          </div>
          <div style={{ fontWeight: 700 }}>E-Tax System</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/tax-filing">File Return</Nav.Link>
            <Nav.Link as={Link} to="/payments">Payments</Nav.Link>
            <Nav.Link as={Link} to="/documents">Documents</Nav.Link>
            <NavDropdown title={<span style={{ display: 'inline-block' }}>{user.name}</span>} id="user-menu" align="end">
              <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
