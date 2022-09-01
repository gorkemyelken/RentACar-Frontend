import React from "react";
import { useFormik } from "formik";
import {
  Container,
  Grid,
  Form,
  Input,
  Button,
  Label,
  Segment,
} from "semantic-ui-react";
import CustomerService from "../services/customerService";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  let customerService = new CustomerService();

  const notify = () =>
    toast.success("You have successfully registered!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const yearOptions = () => {
    const arr = [];

    const startYear = 1900;
    const endYear = 2022;

    for (let i = endYear; i >= startYear; i--) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return arr;
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("Required field."),
    lastName: yup.string().required("Required field."),
    nationalityNumber: yup
      .string()
      .required("Required field.")
      .length(11, "Nationality number must be 11 character."),
    email: yup
      .string()
      .required("Required field.")
      .email("Email must be a valid email."),
    password: yup
      .string()
      .required("Required field.")
      .min(6, "Password must be at least 6 characters.")
      .max(14, "Password must be at most 14 characters."),
    confirmPassword: yup
      .string()
      .required("Required field.")
      .min(6, "Password must be at least 6 characters.")
      .max(14, "Password must be at most 14 characters.")
      .oneOf([yup.ref("password"), null], "Passwords must match."),
    birthYear: yup.number().required("Required field.").positive(),
  });

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        nationalityNumber: "",
        email: "",
        birthYear: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        customerService.add(values);
        resetForm();
        notify();
      },
      validationSchema,
    });

  return (
    <Container>
      <h2>Sign Up</h2>
      <Segment basic size="tiny" color="black" />
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8} textAlign="center">
            <Form onSubmit={handleSubmit}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <h3>First Name</h3>
                    <Input
                      fluid
                      name="firstName"
                      placeholder="Example"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.firstName && touched.firstName && (
                      <Label basic color="red" pointing="above">
                        {errors.firstName}
                      </Label>
                    )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <h3>Last Name</h3>
                    <Input
                      fluid
                      name="lastName"
                      placeholder="Example"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.lastName && touched.lastName && (
                      <Label basic color="red" pointing="above">
                        {errors.lastName}
                      </Label>
                    )}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <h3>Nationality Number</h3>
                    <Input
                      fluid
                      name="nationalityNumber"
                      placeholder="XXXXXXXXXXX"
                      value={values.nationalityNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.nationalityNumber && touched.nationalityNumber && (
                      <Label basic color="red" pointing="above">
                        {errors.nationalityNumber}
                      </Label>
                    )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <h3>Birth Year</h3>
                    <select
                      name="birthYear"
                      value={values.birthYear}
                      onChange={handleChange}
                    >
                      <option>Year</option>
                      {yearOptions()}
                    </select>
                    {errors.birthYear && touched.birthYear && (
                      <Label basic color="red" pointing="above">
                        {errors.birthYear}
                      </Label>
                    )}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <h3>Email</h3>
              <Input
                fluid
                name="email"
                placeholder="example@example.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <Label basic color="red" pointing="above">
                  {errors.email}
                </Label>
              )}
              <br />
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <h3>Password</h3>
                    <Input
                      fluid
                      type="password"
                      name="password"
                      placeholder="******"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password && (
                      <Label basic color="red" pointing="above">
                        {errors.password}
                      </Label>
                    )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <h3>Confirm Password</h3>
                    <Input
                      fluid
                      type="password"
                      name="confirmPassword"
                      placeholder="******"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <Label basic color="red" pointing="above">
                        {errors.confirmPassword}
                      </Label>
                    )}
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <br />
              <br />
              <Button type="submit" className="submitButton">
                Submit
              </Button>
            </Form>
            <h3>Already have an account?</h3>
            <Button inverted color="red" as={NavLink} to="/login">
              Login
            </Button>
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
