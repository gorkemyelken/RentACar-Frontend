import React, { useEffect, useState } from "react";
import { Container, Grid, Button, Segment } from "semantic-ui-react";
import ColorService from "../../services/colorService";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function ColorDelete() {
  let colorService = new ColorService();
  const [colors, setColors] = useState([]);

  const notify = () =>
    toast.error("Color deleted!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    colorService.getColors().then((result) => setColors(result.data.data));
  }, []);

  const handleDelete = (colorId) => {
    colorService.delete(colorId);
    notify();
  };

  

  return (
    <Container>
      <h2>Delete A Color</h2>
      <Segment basic size="tiny" color="black" />
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={8}>
            {colors.map((color) => (
              <Segment key={color.colorId}>
                <h3>{color.colorName}</h3>
                <Button
                  icon="trash"
                  color="red"
                  floated="right"
                  onClick={() => handleDelete(color.colorId)}
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
