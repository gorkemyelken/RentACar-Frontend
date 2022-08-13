import { Container } from 'semantic-ui-react'
import React from 'react'
import CarList from '../pages/Cars/CarList'

export default function CarLayout() {
  return (
    <Container>
      <br/>
      <br/>
        <h2>Cars</h2>
    <hr/>
        <CarList/>
    </Container>
  )
}
