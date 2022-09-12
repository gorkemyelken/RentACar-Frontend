import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { Container, Menu, Button, Image } from 'semantic-ui-react'
import logo from '../images/logo.png';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)

  function handleSignOut(params) {
    setIsAuthenticated(false)
  }

  return (
    <div>
      <Menu inverted fixed="top" borderless size="huge">
        <Container>
          <Image src={logo} href="/home"/>
          <Menu.Item as={NavLink} to="/home" content="Home" icon="home" />
          <Menu.Item as={NavLink} to="/cars" content="Vehicles" icon="car" />
          <Menu.Item as={NavLink} to="/aboutus" content="About Us" icon="question circle" />
          <Menu.Item as={NavLink} to="/adminpanel" content="ADMİN PANEL" />
          <Menu.Item position='right'>
          {isAuthenticated? <SignedIn signOut={handleSignOut}/> : <SignedOut/>}
          </Menu.Item>
          
        </Container>
      </Menu>
    </div>
  )
}