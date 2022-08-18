import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CarService from '../services/carService';
import { Container, Image, Table, Button } from 'semantic-ui-react'

export default function CarDetail() {
    let { id } = useParams();
    const [car, setCar] = useState({});
    let carService = new CarService();
    useEffect(() => {
        carService.findByCarId(id).then((result) => setCar(result.data.data));
    }, []);

    return (
        <Container>
            <br />
            <br />
            <h2>{car.carName}</h2>
            <hr />
            {car.carImages == null
                ? null
                : <div >
                    <Image className='carDetailImage' src={car.carImages[0].imagePath} size="large" centered />
                </div>
            }
            <Button color='blue' circular size='massive' className='rentNowButton'>Rent Now!</Button>
            <hr/>
            <Table textAlign='center' celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Daily Price</Table.HeaderCell>
                        <Table.HeaderCell>Model Year</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{car.dailyPrice}₺</Table.Cell>
                        <Table.Cell>{car.modelYear}</Table.Cell>
                        <Table.Cell>{car.description}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <br />
            <br />
            {car.carImages == null
                ? null
                : <div>
                    <Image.Group size='medium' >
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
