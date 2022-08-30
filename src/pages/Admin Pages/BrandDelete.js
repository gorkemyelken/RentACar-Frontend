import React, { useEffect, useState } from "react";
import { Container, Grid, Button, Card, Segment, CardContent } from "semantic-ui-react";
import BrandService from "../../services/brandService";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function BrandDelete() {
  let brandService = new BrandService();
  const [brands, setBrands] = useState([]);

  const notify = () =>
    toast.error("Brand deleted!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    brandService.getBrands().then((result) => setBrands(result.data.data));
  }, []);

  const handleDelete = (brandId) => {
    brandService.delete(brandId);
    notify();
  };

  return (
    <Container>
      <h2>Delete A Brand</h2>
      <Segment basic size="tiny" color="black" />
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={16}>
            <Card.Group itemsPerRow="5">
              {brands.map((brand) => (
                <Card raised key={brand.brandId}>
                  <Card.Content className="montserrat">
                    <Card.Header>{brand.brandName}</Card.Header>
                  </Card.Content>
                  <CardContent extra>
                    <Button
                      icon="trash"
                      color="red"
                      floated="right"
                      onClick={() => handleDelete(brand.brandId)}
                    />
                  </CardContent>
                </Card>
              ))}
            </Card.Group>
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
