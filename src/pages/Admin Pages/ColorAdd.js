import React from "react";
import { useFormik } from "formik";
import { Container, Grid, Form, Input, Button, Label } from "semantic-ui-react";
import ColorService from "../../services/colorService";
import * as yup from "yup";

export default function ColorAdd() {
  let colorService = new ColorService();

  const validationSchema = yup.object().shape({
    colorName: yup.string().required('Required field.'),
  });
  
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      colorName: "",
    },
    onSubmit: (values) => {
      console.log(values);
      colorService.add(values);
    },
    validationSchema
  });

  return (
    <Container>
      <br />
      <br />
      <h2>Add A Color</h2>
      <hr />
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8}>
            <Form onSubmit={handleSubmit} className="form">
              <h3>Color Name</h3>
              <Input
                fluid
                name="colorName"
                value={values.colorName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.colorName && touched.colorName && (<Label basic color='red' pointing='above'>{errors.colorName}</Label>)}
              <br /><br/>
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
