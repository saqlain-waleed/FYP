import React, { Component } from "react";
import { Nav,Navbar,Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export class navbar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">SMART QUEST</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <NavLink className="show-complains-nav" to="/">All Complains</NavLink>
            <NavLink  className="add-complains-nav" to="/addconform">Add Complains</NavLink>
          </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default navbar;
