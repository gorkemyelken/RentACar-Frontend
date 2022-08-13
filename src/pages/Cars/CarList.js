import React, { useEffect, useState } from 'react';
import { Card, Container, Image, Grid, Form, Button } from 'semantic-ui-react'
import CarService from '../../services/carService';
import { NavLink } from "react-router-dom";

export default function CarList() {

    const [cars, setcars] = useState([]);



    useEffect(() => {
        let carService = new CarService();
        carService.getCars().then((result) => setcars(result.data.data));
    }, []);

    return (
        <div>
            <Container>
                <Grid divided='vertically'>
                    <Grid.Row>
                        <Grid.Column width={13}>
                            <Card.Group itemsPerRow="3">
                                {cars.map((car) => (
                                    <Card raised key={car.carId}>
                                        <Image circular size="huge" src={car.carImages[0].imagePath} />
                                        <Card.Content>
                                            <Card.Header>
                                                {car.carName}
                                            </Card.Header>
                                            <Card.Description>
                                                {car.description}
                                            </Card.Description>
                                            <br />
                                            <Card.Content extra>
                                                Daily Price: {car.dailyPrice} <br />
                                                Model Year: {car.modelYear}
                                                <br/>
                                                <Button as={NavLink} to={`/cars/${car.carId}`}color='green'>Details</Button>
                                            </Card.Content>
                                        </Card.Content>
                                    </Card>))}
                            </Card.Group>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Form>
                                <Form.Select
                                    name="brand"
                                    placeholder="Brand"
                                />
                                <Form.Select
                                    name="color"
                                    placeholder="Color"
                                />
                                <h3>Daily Price</h3>
                                <Form.Group widths="2">
                                    <Form.Input fluid label='Min' />
                                    <Form.Input fluid label='Max' />
                                </Form.Group>
                                <h3>Model Year</h3>
                                <Form.Group widths="2">
                                    <Form.Input fluid label='Min' />
                                    <Form.Input fluid label='Max' />
                                </Form.Group>
                                <br />
                                <Button circular fluid color="green" content="Filter" />
                                <br />
                                <Button circular fluid content="Clear Filter" />
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
}