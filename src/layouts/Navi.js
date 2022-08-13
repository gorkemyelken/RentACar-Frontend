import React from 'react'
import { Container, Menu } from 'semantic-ui-react'

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top" borderless size="huge">

        <Container className="navi">
          <Menu.Item href='/' name="Home" icon="home" />
          <Menu.Item content="Cars" icon="car" />
          <Menu.Item content="About Us" icon="question circle" />
          <Menu.Menu position="right">

          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}