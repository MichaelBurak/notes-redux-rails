//Presentational component:
//Displays simple links to index and create route on all pages.

import {Navbar, NavItem, Nav} from 'react-bootstrap'
import React from 'react'
import {withRouter, Link} from "react-router-dom"

const NavigationBar = () =>

<Navbar>
  <Nav>
    <NavItem eventKey={1}>
    <Link to={"/"}>Return to Index</Link>
    </NavItem>
    <NavItem eventKey={2}>
    <Link to={"/notes/new"}>Create a new note!</Link>
    </NavItem>
  </Nav>
</Navbar>;

export default NavigationBar
