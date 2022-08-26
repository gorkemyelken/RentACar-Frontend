import React from "react";
import { useFormik } from "formik";
import { Container, Grid, Form, Input, Button } from "semantic-ui-react";
import BrandService from "../../services/brandService";

export default function BrandAdd() {
  let brandService = new BrandService();

  const validationSchema = Yup.object().shape({
    brandName: yup.string().required(),
    brandImagePath: yup.string().required()
  });
  
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      brandName: "",
      brandImagePath: "",
    },
    onSubmit: (values) => {
      console.log(values);
      brandService.add(values);
    },
    validationSchema
  });

  return (
    <Container>
      <br />
      <br />
      <h2>Add A Brand</h2>
      <hr />
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8}>
            <Form onSubmit={handleSubmit} className="form">
              <h3>Brand Name</h3>
              <Input
                fluid
                name="brandName"
                value={values.brandName}
                onChange={handleChange}
              />
              <h3>Brand Logo</h3>
              <Input
                fluid
                name="brandImagePath"
                value={values.brandImagePath}
                onChange={handleChange}
              />
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
