import React from "react"
import {Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import headerStyles from './header.module.css'
import {Link} from 'react-scroll'

export default (props) => (

  
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/"><Image src={require('../images/artstonelogo.jpg')} style={{height: 50, width: 50}}/> Art Stone Marble & Granite</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

    
    <Nav className="mr-auto">
      <Nav.Link href='/'><Link activeClass="active" to="about" spy={true} smooth={true}>About</Link></Nav.Link>
      <NavDropdown title="Catalog" id="basic-nav-dropdown">
        <NavDropdown.Item href="/stones">Stones</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/sinks">Sinks</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/edges">Edges</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link><Link activeClass="active" to="contact" spy={true} smooth={true}>Contact</Link></Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
)
