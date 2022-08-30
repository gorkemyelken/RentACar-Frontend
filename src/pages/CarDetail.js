import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarService from "../services/carService";
import {
  Container,
  Image,
  Button,
  Label,
  Segment,
} from "semantic-ui-react";

export default function CarDetail() {
  let { id } = useParams();
  const [car, setCar] = useState({});
  let carService = new CarService();
  useEffect(() => {
    carService.findByCarId(id).then((result) => setCar(result.data.data));
  }, []);

  return (
    <Container>
      <h2>{car.carName}</h2>
      <Segment basic size="tiny" color="black" />
      {car.carImages == null ? null : (
        <div>
          <Image
            className="carDetailImage"
            src={car.carImages[0].imagePath}
            size="large"
            centered
          />
        </div>
      )}

      <Label color="black" horizontal size="big">
        {car.dailyPrice}₺
      </Label>

      <Label color="black" horizontal size="big">
        {car.description}
      </Label>

      <Label color="black" horizontal size="big">
        {car.modelYear}
      </Label>

      <br />
      <br />
      <Button className="submitButton">Rent Now!</Button>
      <br />
      <br />
      {car.carImages == null ? null : (
        <div>
          <Image.Group size="medium">
            {car.carImages?.map((carImages) => (
              <Image key={carImages.carImageId} src={carImages.imagePath} href={carImages.imagePath} />
            ))}
          </Image.Group>
        </div>
      )}
    </Container>
  );
}
