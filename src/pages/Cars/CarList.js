import React, { useEffect, useState } from 'react';
import { Card, Container, Image } from 'semantic-ui-react'
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
                <Card.Group itemsPerRow="3">
                    {cars.map((car) => (
                    
                                <Card raised key={car.carId}>
                                    <Image circular src={car.carImages[0].imagePath} />
                                    <Card.Content>
                                        <Card.Header>
                                            {car.carName}
                                        </Card.Header>
                                        <Card.Description>
                                            {car.description}
                                        </Card.Description>
                                        <br />
                                        <Card.Content extra>
                                        Daily Price: {car.dailyPrice} <br/>
                                        Model Year: {car.modelYear}
                                        </Card.Content>
                                    </Card.Content>
                                </Card>))}
                </Card.Group>
            </Container>
        </div>
    );
}