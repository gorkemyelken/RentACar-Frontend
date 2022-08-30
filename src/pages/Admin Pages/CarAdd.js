import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
  Container,
  Grid,
  Form,
  Input,
  Button,
  Label,
} from "semantic-ui-react";
import CarService from "../../services/carService";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BrandService from "../../services/brandService";
import ColorService from "../../services/colorService";

export default function CarAdd() {
  let carService = new CarService();
  let brandService = new BrandService();
  let colorService = new ColorService();

  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    brandService.getBrands().then((result) => setBrands(result.data.data));
    colorService.getColors().then((result) => setColors(result.data.data));
  }, []);

  const notify = () =>
    toast.success("Car added!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const brandOptions = () => {
    const brandlist = [];
    brands.map((brand) =>
      brandlist.push(
        <option key={brand.brandId} value={brand.brandId}>
          {brand.brandName}
        </option>
      )
    );
    return brandlist;
  };

  const colorOptions = () => {
    const colorList = [];
    colors.map((color) =>
      colorList.push(
        <option key={color.colorId} value={color.colorId}>
          {color.colorName}
        </option>
      )
    );
    return colorList;
  };

  const validationSchema = yup.object().shape({
    carName: yup.string().required("Required field."),
    dailyPrice: yup.number().required("Required field.").min(0),
    modelYear: yup.number().required("Required field.").min(1950),
    description: yup.string().required("Required field."),
  });

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        carName: "",
        dailyPrice: "",
        modelYear: "",
        description: "",
      },
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        carService.add(values);
        resetForm();
        notify();
      },
      validationSchema,
    });

  return (
    <Container>
      <h2>Add A Car</h2>
      <hr />
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8} textAlign="center">
            <Form onSubmit={handleSubmit}>
              <h3>Car Name</h3>
              <Input
                fluid
                name="carName"
                value={values.carName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.carName && touched.carName && (
                <Label basic color="red" pointing="above">
                  {errors.carName}
                </Label>
              )}
              <h3>Brand</h3>
              <select
                name="brand.brandId"
                value={values.brand?.brandId}
                onChange={handleChange}
              >
                <option>Brand</option>
                {brandOptions()}
              </select>
              {errors.brand && touched.brand && (
                <Label basic color="red" pointing="above">
                  {errors.brand}
                </Label>
              )}
              <h3>Color</h3>
              <select
                name="color.colorId"
                value={values.color?.colorId}
                onChange={handleChange}
              >
                <option>Color</option>
                {colorOptions()}
              </select>
              {errors.color && touched.color && (
                <Label basic color="red" pointing="above">
                  {errors.color}
                </Label>
              )}
              <h3>Daily Price</h3>
              <Input
                fluid
                name="dailyPrice"
                value={values.dailyPrice}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.dailyPrice && touched.dailyPrice && (
                <Label basic color="red" pointing="above">
                  {errors.dailyPrice}
                </Label>
              )}
              <h3>Model Year</h3>
              <Input
                fluid
                name="modelYear"
                value={values.modelYear}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.modelYear && touched.modelYear && (
                <Label basic color="red" pointing="above">
                  {errors.modelYear}
                </Label>
              )}
              <h3>Description</h3>
              <Input
                fluid
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.description && touched.description && (
                <Label basic color="red" pointing="above">
                  {errors.description}
                </Label>
              )}
              <br />
              <br />
              <Button type="submit" className="submitButton">
                Submit
              </Button>
              {/* <code>{JSON.stringify(values)}</code> */}
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
