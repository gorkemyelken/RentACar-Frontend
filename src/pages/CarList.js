import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Image,
  Grid,
  Form,
  Button,
  Segment,
  CardContent,
  Label,
} from "semantic-ui-react";
import CarService from "../services/carService";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";

export default function CarList() {
  let carService = new CarService();
  const [cars, setcars] = useState([]);

  useEffect(() => {
    carService.getCars().then((result) => setcars(result.data.data));
  }, []);

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        brandId: "",
        colorId: "",
        startModelYear: "",
        endModelYear: "",
        startDailyPrice: "",
        endDailyPrice: ""
      },
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        carService.findByFiltered(values);
        resetForm();
      }
    });

    

  return (
    <div>
      <Container>
        <h2>CARS</h2>
        <Segment basic size="tiny" color="black" />
        <Grid divided="vertically">
          <Grid.Row>
            <Grid.Column width={13}>
              <Card.Group itemsPerRow="3">
                {cars.map((car) => (
                  <Card raised key={car.carId}>

                    <Image
                      circular
                      size="huge"
                      src={car.carImages[0]?.imagePath}
                    />
                    <Card.Content className="montserrat">
                      <Card.Header>{car.carName}</Card.Header>
                      <Card.Description>{car.description}</Card.Description>
                      <br />
                      <Card.Content extra>
                        <strong>Daily Price: </strong>
                        <Label color="black" horizontal size="large">
                          {car.dailyPrice}₺
                        </Label>
                      </Card.Content>
                    </Card.Content>
                    <CardContent>
                      <Button
                        circular
                        floated="right"
                        inverted
                        as={NavLink}
                        to={`/cars/${car.carId}`}
                        color="red"
                      >
                        View Detail
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </Card.Group>
            </Grid.Column>
            <Grid.Column width={3}>
              <Form onSubmit={handleSubmit}>
              <Form.Input 
                  fluid 
                  label="Brand" 
                  name="brandId"
                  value={values.brandId}
                  onChange={handleChange}
                  onBlur={handleBlur}/>
                  <Form.Input fluid 
                  label="Color" 
                  name="colorId"
                  value={values.colorId}
                  onChange={handleChange}
                  onBlur={handleBlur}/>
                <h3>Daily Price</h3>
                <Form.Group widths="2">
                  <Form.Input 
                  fluid 
                  label="Min" 
                  name="startDailyPrice"
                  value={values.startDailyPrice}
                  onChange={handleChange}
                  onBlur={handleBlur}/>
                  <Form.Input fluid 
                  label="Max" 
                  name="endDailyPrice"
                  value={values.endDailyPrice}
                  onChange={handleChange}
                  onBlur={handleBlur}/>
                </Form.Group>
                <h3>Model Year</h3>
                <Form.Group widths="2">
                  <Form.Input fluid 
                  label="Min" 
                  name="startModelYear"
                  value={values.startModelYear}
                  onChange={handleChange}
                  onBlur={handleBlur}/>
                  <Form.Input fluid 
                  label="Max" 
                  name="endModelYear"
                  value={values.endModelYear}
                  onChange={handleChange}
                  onBlur={handleBlur}/>
                </Form.Group>
                <br />
                <Button circular fluid color="green" content="Filter" />
                <br />
                <Button circular fluid color="grey" content="Clear Filter" />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
