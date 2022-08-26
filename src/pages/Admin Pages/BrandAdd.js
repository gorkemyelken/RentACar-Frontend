import React from "react";
import { useFormik } from "formik";
import { Container, Grid, Form, Input, Button, Label } from "semantic-ui-react";
import BrandService from "../../services/brandService";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BrandAdd() {
  let brandService = new BrandService();

  const notify = () =>
    toast.success("Brand added!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const validationSchema = yup.object().shape({
    brandName: yup.string().required("Required field."),
    brandImagePath: yup.string().required("Required field."),
  });

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        brandName: "",
        brandImagePath: "",
      },
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        brandService.add(values);
        if (brandService.add(values)) {
          resetForm();
          notify();
        }
      },
      validationSchema,
    });

  return (
    <Container>
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
      <br />
      <br />
      <h2>Add A Brand</h2>
      <hr />
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8}>
            <Form onSubmit={handleSubmit}>
              <h3>Brand Name</h3>
              <Input
                fluid
                name="brandName"
                value={values.brandName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.brandName && touched.brandName && (
                <Label basic color="red" pointing="above">
                  {errors.brandName}
                </Label>
              )}
              <h3>Brand Logo</h3>
              <Input
                fluid
                name="brandImagePath"
                value={values.brandImagePath}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.brandImagePath && touched.brandImagePath && (
                <Label basic color="red" pointing="above">
                  {errors.brandImagePath}
                </Label>
              )}
              <br />
              <br />
              <Button fluid color="green" type="submit">
                Submit
              </Button>
              <code>{JSON.stringify(values)}</code>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
