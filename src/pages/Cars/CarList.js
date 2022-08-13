import React, { useEffect, useState } from 'react';
import { Card, Container, Image, Grid} from 'semantic-ui-react'
import CarService from '../../services/carService';
import './CarList.css';

export default function CarList() {

    const [cars, setcars] = useState([]);



    useEffect(() => {
        let carService = new CarService();
        carService.getCars().then((result) => setcars(result.data.data));
    }, []);

    return (
        <div>
            <Container className='carsContainer'>
            <Grid columns={4} divided="vertically">
                <Grid.Row>
                    {cars.map((car) => (
                        <Grid.Column>

                            <Card key={car.carId}>

                                <Image src=""circular />

                                <Card.Content>
                                    <Card.Header>
                                       {car.carName}
                                       </Card.Header>
                                    <Card.Description>
                                    
                                    </Card.Description>
                                    <br />
                                    <Card.Content extra>

                                    </Card.Content>

                                </Card.Content>
                            </Card>

                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>

            </Container>
            
        </div>
    );
}