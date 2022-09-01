import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  Container,
  Grid,
  Form,
  Input,
  Button,
  Label,
  Segment,
  Image,
  Select
} from "semantic-ui-react";
import RentalService from "../services/rentalService";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarService from "../services/carService";
import { useParams } from "react-router-dom";

export default function Rental() {
  let { id } = useParams();
  let rentalService = new RentalService();
  let carService = new CarService();

  const [car, setCar] = useState({});

  useEffect(() => {
    carService.findByCarId(id).then((result) => setCar(result.data.data));
  }, []);

  const notify = () =>
    toast.success("This vehicle was successfully rented!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        rentDate: "",
        returnDate: "",
      },
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        rentalService.add(values);
        resetForm();
        notify();
      },
    });

  return (
    <Container>
      <h2>Rental Page</h2>
      <Segment basic size="tiny" color="black" />

      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
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
          </Grid.Column>
          <Grid.Column>
            <Form onSubmit={handleSubmit}>
              <h3>Rent Date</h3>
              <Input
                name="rentDate"
                placeholder="YYYY-MM-DD"
                value={values.rentDate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.rentDate && touched.rentDate && (
                <Label basic color="red" pointing="above">
                  {errors.rentDate}
                </Label>
              )}
              <h3>Return Date</h3>
              <Input
                name="returnDate"
                placeholder="YYYY-MM-DD"
                value={values.returnDate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.returnDate && touched.returnDate && (
                <Label basic color="red" pointing="above">
                  {errors.returnDate}
                </Label>
              )}
              <Segment color="grey" inverted>
              <h3>Credit Card</h3>
              <Form.Group inline>
                  <Input placeholder="XXXX" />&nbsp;
                  <Input placeholder="XXXX" />&nbsp;
                  <Input placeholder="XXXX" />&nbsp;
                  <Input placeholder="XXXX" />
              </Form.Group>
              <Input fluid placeholder="Name On Credit Card" />
              <br/>
              <Form.Group inline>
              <Input placeholder="CVC2" />&nbsp;
              <select><option>Month</option></select>&nbsp;
              <select><option>Year</option></select>
              </Form.Group>
              <Form.Checkbox label='I want to use 3D.'/>
              <Form.Checkbox label='I consent to the saving of my credit card information.' />
              </Segment>
              <br />
              <Form.Checkbox label='I agree to the Terms and Conditions.' />
              <br />
              <Button type="submit" className="submitButton">
                Rent
              </Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}
