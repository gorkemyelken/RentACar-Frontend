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
import * as yup from "yup";
import CarService from "../services/carService";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import BrandService from "../services/brandService";
import ColorService from "../services/colorService";

export default function CarList({ type }) {
  let carService = new CarService();
  let brandService = new BrandService();
  let colorService = new ColorService();

  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);

  const [brandId, setBrandId] = useState(0);
  const [colorId, setColorId] = useState(0);
  const [startDailyPrice, setStartDailyPrice] = useState(0);
  const [endDailyPrice, setEndDailyPrice] = useState(0);
  const [startModelYear, setStartModelYear] = useState(0);
  const [endModelYear, setEndModelYear] = useState(0);

  useEffect(() => {
    carService
      .findByFiltered(
        brandId,
        colorId,
        startDailyPrice,
        endDailyPrice,
        startModelYear,
        endModelYear
      )
      .then((result) => setCars(result.data.data));
    carService.getCars().then((result) => setCars(result.data.data));
    brandService.getBrands().then((result) => setBrands(result.data.data));
    colorService.getColors().then((result) => setColors(result.data.data));
  }, []);

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
    startDailyPrice: yup.number().required("Required field.").min(0),
    endDailyPrice: yup.number().required("Required field.").min(0),
    startModelYear: yup.number().required("Required field.").min(1950),
    endModelYear: yup.number().required("Required field.").min(1950),
  });

  const { handleSubmit, handleChange, values, touched, handleBlur } = useFormik(
    {
      initialValues: {
        startModelYear: "",
        endModelYear: "",
        startDailyPrice: "",
        endDailyPrice: "",
      },
      onSubmit: (values, { resetForm }) => {
        setBrandId(values.brandId);
        setColorId(values.colorId);
        setStartDailyPrice(values.startDailyPrice);
        setEndDailyPrice(values.endDailyPrice);
        setStartModelYear(values.startModelYear);
        setEndModelYear(values.endModelYear);
        console.log(values);
        carService
          .findByFiltered(
            brandId,
            colorId,
            startDailyPrice,
            endDailyPrice,
            startModelYear,
            endModelYear
          )
          .then((result) => setCars(result.data.data));
        resetForm();
      },
      validationSchema,
    }
  );

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
                <h3>Brand</h3>
                <select
                  name="brandId"
                  value={values.brandId}
                  onChange={handleChange}
                >
                  <option>Brand</option>
                  {brandOptions()}
                </select>
                <h3>Color</h3>
                <select
                  name="colorId"
                  value={values.colorId}
                  onChange={handleChange}
                >
                  <option>Color</option>
                  {colorOptions()}
                </select>
                <h3>Daily Price</h3>
                <Form.Group widths="2">
                  <Form.Input
                    fluid
                    label="Min"
                    name="startDailyPrice"
                    value={values.startDailyPrice}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Form.Input
                    fluid
                    label="Max"
                    name="endDailyPrice"
                    value={values.endDailyPrice}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>
                <h3>Model Year</h3>
                <Form.Group widths="2">
                  <Form.Input
                    fluid
                    label="Min"
                    name="startModelYear"
                    value={values.startModelYear}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Form.Input
                    fluid
                    label="Max"
                    name="endModelYear"
                    value={values.endModelYear}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>
                <br />
                <Button circular fluid color="green" type="submit" content="Filter" />
                <br />
                <Button circular fluid color="grey" content="Clear Filter" />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <code>{JSON.stringify(values)}</code>
      </Container>
    </div>
  );
}
