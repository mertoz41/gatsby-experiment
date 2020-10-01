import React from "react"
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default (props) => (
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="home">Art Stone Marble & Granite</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="about">About</Nav.Link>
      <NavDropdown title="Catalog" id="basic-nav-dropdown">
        <NavDropdown.Item href="stones">Stones</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="sinks">Sinks</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
)
