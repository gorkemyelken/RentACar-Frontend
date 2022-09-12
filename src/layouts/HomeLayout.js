import React, { useState, useEffect } from "react";
import {
  Card,
  Grid,
  Image,
  Form,
  Button,
  Step,
  CardContent,
  Label,
  Icon,
  List,
  Dropdown,
  CardGroup,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import BrandList from "../pages/BrandList";
import homeImage from "../images/homeImage.png";
import CarService from "../services/carService";

export default function HomeLayout() {
  let carService = new CarService();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    carService.getCars().then((result) => setCars(result.data.data));
  }, []);

  const steps = [
    {
      key: "Search",
      icon: "search",
      title: "Search",
    },
    {
      key: "Book",
      icon: "edit outline",
      title: "Book",
    },
    {
      key: "Rent Vehicle",
      icon: "payment",
      title: "Rent Vehicle",
    },
  ];
  return (
    <div className="homeLayout">
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column />
          <Grid.Column width={8}>
            <Image src={homeImage} />
            <Step.Group size="large" items={steps} />
            <h2>MOST POPULAR CARS</h2>
            <hr />

            <div>
              <Image.Group size="medium">
                {cars.map((car) => (
                  <span>
                    {car.rentals.length > 0 ? (
                      <Image
                      className="popularCar"
                        key={car.carId}
                        label={{
                          as: "a",
                          corner: "left",
                          icon: "fire",
                          color: "red",
                        }}
                        src={car.carImages[0]?.imagePath}
                        as={NavLink} to={`/cars/${car.carId}`}
                      />
                    ) : null}
                  </span>
                ))}
              </Image.Group>
            </div>
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
      </Grid>
    </div>
  );
}
