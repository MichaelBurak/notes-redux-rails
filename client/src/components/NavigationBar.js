import {Navbar, NavItem, NavDropdown, MenuItem, Nav, FormGroup, FormControl, Button} from 'react-bootstrap'
import React from 'react'
//import { withRouter } from "react-router-dom"

const NavigationBar = (props) =>

//function searchForm(e){
  //e.preventDefault
  //const history = this.props.history
  //history.push(`/notes/${e.target.value}`)
//}

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
