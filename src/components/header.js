import React, {useState, useEffect} from "react"
import {Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import headerStyles from './header.module.css'
import {Link} from 'react-scroll'

export default (props) => {
  const [home, setHome] = useState(true)

  useEffect(() => {
    let splitted = window.location.href.split('/')
    if (splitted[3].length){
      setHome(false)
    }
    // 4th element in splitted is how I can determine the path

    // console.log(splitted[3])
// 
  }, [])

  return(

  
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/"><Image src={require('../images/artstonelogo.jpg')} style={{height: 45, width: 45}}/> Art Stone Marble & Granite</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

    
    <Nav className="mr-auto">
      {home ? 
      <Nav.Link><Link activeClass="active" to="about" spy={true} smooth={true}>About</Link></Nav.Link>
      :
      <Nav.Link href='/'>About</Nav.Link>
      }
      <NavDropdown title="Catalog" id="basic-nav-dropdown">
        <NavDropdown.Item href="/stones">Stones</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/sinks">Sinks</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/edges">Edges</NavDropdown.Item>
      </NavDropdown>
      {home ? 
      <Nav.Link><Link activeClass="active" to="contact" spy={true} smooth={true}>Contact</Link></Nav.Link>
      :
      <Nav.Link href='/'>Contact</Nav.Link>
     }
     {home ? 
     <Nav.Link><Link activeClass="active" to="services" spy={true} smooth={true}>Services</Link></Nav.Link>
    :
    <Nav.Link href="/">Services</Nav.Link>}
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
)
}
