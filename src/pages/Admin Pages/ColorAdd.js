import React from "react";
import { useFormik } from "formik";
import { Container, Grid, Form, Input, Button, Label, Segment } from "semantic-ui-react";
import ColorService from "../../services/colorService";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ColorAdd() {
  let colorService = new ColorService();

  const notify = () =>
    toast.success("Color added!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const validationSchema = yup.object().shape({
    colorName: yup.string().required("Required field."),
  });

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        colorName: "",
      },
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        colorService.add(values);
        resetForm();
        notify();
      },
      validationSchema,
    });

  return (
    <Container>
      

      <h2>Add A Color</h2>
      <Segment basic size="tiny" color="black" />
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8} textAlign="center">
            <Form onSubmit={handleSubmit}>
              <h3>Color Name</h3>
              <Input
                fluid
                name="colorName"
                value={values.colorName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.colorName && touched.colorName && (
                <Label basic color="red" pointing="above">
                  {errors.colorName}
                </Label>
              )}
              <br />
              <br />
              <Button fluid color="green" type="submit">
                Submit
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
