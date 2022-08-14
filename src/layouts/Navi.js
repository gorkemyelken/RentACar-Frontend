import React from 'react'
import { NavLink } from "react-router-dom";
import { Container, Menu, Button } from 'semantic-ui-react'

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top" borderless size="huge">

        <Container className="navi">
          <Menu.Item as={NavLink} to="/home" content="Home" icon="home" />
          <Menu.Item as={NavLink} to="/cars" content="Vehicles" icon="car" />
          <Menu.Item as={NavLink} to="/aboutus" content="About Us" icon="question circle" />
          <Menu.Menu position="right">

              <Button as={NavLink} to="/signup" color='blue'>Sign Up</Button>


              <Button as={NavLink} to="/login" color='green'>Log In</Button>

          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}