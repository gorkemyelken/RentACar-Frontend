import React, { useEffect, useState } from "react";
import { Container, Grid, Button, Segment } from "semantic-ui-react";
import BrandService from "../../services/brandService";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <Grid.Column width={8}>
            {brands.map((brand) => (
              <Segment key={brand.brandId}>
                <h3>{brand.brandName}</h3>
                <Button
                  icon="trash"
                  color="red"
                  floated="right"
                  onClick={() => handleDelete(brand.brandId)}
                />
                <br />
                <br />
              </Segment>
            ))}
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
