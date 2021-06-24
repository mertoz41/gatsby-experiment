import React from "react"
import {Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import headerStyles from './header.module.css'


export default (props) => (

  
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/home"><Image src={require('../images/artstonelogo.jpg')} style={{height: 50, width: 50}}/> Art Stone Marble & Granite</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

    
    <Nav className="mr-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <NavDropdown title="Catalog" id="basic-nav-dropdown">
        <NavDropdown.Item href="/stones">Stones</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/sinks">Sinks</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/edges">Edges</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
)
