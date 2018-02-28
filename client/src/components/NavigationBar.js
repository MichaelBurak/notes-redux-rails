// Presentational component: Displays simple links to index and create route on
// all pages.

import {Navbar, NavItem, Nav, NavLink} from 'reactstrap'
import React from 'react'
import {Link} from "react-router-dom"

const NavigationBar = () => 
<Navbar>
  <Nav>
    <NavItem>
      <NavLink>
        <Link to={"/"}>Return to Index</Link>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink>
        <Link to={"/notes/new"}>Create a new note!</Link>
      </NavLink>
    </NavItem>
  </Nav>
</Navbar>;

export default NavigationBar
