import {Navbar, NavItem, NavDropdown, MenuItem, Nav, FormGroup, FormControl, Button} from 'react-bootstrap'
import React from 'react'

const NavigationBar = (props) =>


<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Navbar</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="/">
      Return to Index
    </NavItem>
    <NavItem eventKey={2} href="/notes/new">
    Create a new note!
    </NavItem>
  </Nav>
</Navbar>;

export default NavigationBar
