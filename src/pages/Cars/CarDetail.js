import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CarService from '../../services/carService';
import { Container, Image } from 'semantic-ui-react'

export default function CarDetail() {
    let { id } = useParams();
    const [car, setCar] = useState({})

    useEffect(() => {
        let carService = new CarService()
        carService.findByCarId(id).then(result => setCar(result.data.data))
    }, [])

    return (
        <Container>
            <br />
            <br />
            <h2>{car.carName}</h2>
            <hr />
            <Image.Group size='large'>
                <Image src={car.carImages[0]?.imagePath}></Image>
                <Image src={car.carImages[1]?.imagePath}></Image>
                <Image src={car.carImages[2]?.imagePath}></Image>
                <Image src={car.carImages[3]?.imagePath}></Image>
                <Image src={car.carImages[4]?.imagePath}></Image>

            </Image.Group>

        </Container>
    )
}
