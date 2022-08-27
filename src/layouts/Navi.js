import React from 'react'
import { NavLink } from "react-router-dom";
import { Container, Menu, Button, Image } from 'semantic-ui-react'
import logo from '../images/logo.png';

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top" borderless size="huge">
        <Container>
          <Image src={logo}/>
          <Menu.Item as={NavLink} to="/home" content="Home" icon="home" />
          <Menu.Item as={NavLink} to="/cars" content="Vehicles" icon="car" />
          <Menu.Item as={NavLink} to="/aboutus" content="About Us" icon="question circle" />
          <Menu.Item as={NavLink} to="/adminpanel" content="ADMİN PANEL" />
          <Menu.Item position='right'>
            <Button inverted color='red' as={NavLink} to="/signup">Sign up</Button>
          </Menu.Item>
          <Menu.Item>
            <Button color='red'>Log-in</Button>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  )
}