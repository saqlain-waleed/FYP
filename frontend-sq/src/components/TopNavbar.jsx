import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function TopNavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ width: "100%" }}>
      <Container>
        <Navbar.Brand href="/">SMART QUEST</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;