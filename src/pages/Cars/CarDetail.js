import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CarService from '../../services/carService';
import { Container, Image, Grid } from 'semantic-ui-react'

export default function CarDetail() {
    let { id } = useParams();
    const [car, setCar] = useState({})

    useEffect(() => {
        let carService = new CarService()
        carService.findByCarId(id).then((result) => setCar(result.data.data));
    }, [])

    return (
        <Container>
            <br />
            <br />
            <h2>{car.carName}</h2>
            <hr />
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <h3>Daily Price</h3>
                        {car.dailyPrice}
                        <h3>Model Year</h3>
                        {car.modelYear}
                        
                    </Grid.Column>
                    <Grid.Column>
                    <h3>Description</h3>
                        {car.description}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            {car.carImages == null
                ? null
                : <div>
                    <Image.Group size='medium'>
                        {car.carImages?.map((carImages) =>
                            <Image src={carImages.imagePath} />
                        )
                        }
                    </Image.Group>
                </div>
            }

        </Container>
    )
}
