import React from 'react'
import { NavLink } from "react-router-dom";
import { Container, Menu, Button } from 'semantic-ui-react'

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top" borderless size="huge">

        <Container className="navi">
          <Menu.Item as={NavLink} to="/home" content="Home" icon="home" />
          <Menu.Item as={NavLink} to="/cars" content="Cars" icon="car" />
          <Menu.Item as={NavLink} to="/aboutus" content="About Us" icon="question circle" />
          <Menu.Menu position="right">
            <Menu.Item >
              <Button as={NavLink} to="/signup" color='blue'>Sign Up</Button>
            </Menu.Item>
            <Menu.Item content="Sign Up">
              <Button as={NavLink} to="/login" color='green'>Log In</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}