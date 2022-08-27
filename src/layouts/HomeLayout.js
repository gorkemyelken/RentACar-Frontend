import React from "react";
import { Grid, Form, Button, Step, Image } from "semantic-ui-react";
import BrandList from "../pages/BrandList";
import homeImage from "../images/homeImage.png";

export default function HomeLayout() {
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
            <Step.Group size="huge" items={steps} />
            <h2>BRANDS</h2>
            <hr />
            <BrandList />
            <h2>RESERVATION</h2>
            <hr />
            <Form>
              <Form.Group>
                <Form.Input
                  label="Rent Date"
                  placeholder="YYYY-MM-DD"
                  width={8}
                />
                <Form.Input
                  label="Return Date"
                  placeholder="YYYY-MM-DD"
                  width={8}
                />
              </Form.Group>
              <Button inverted circular color="red" type="submit">
                SEARCH
              </Button>
            </Form>
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
      </Grid>
    </div>
  );
}
