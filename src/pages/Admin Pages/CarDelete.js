import React, { useEffect, useState } from "react";
import { Container, Grid, Button, Card, Segment, CardContent, Image } from "semantic-ui-react";
import CarService from '../../services/carService'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function CarDelete() {
let carService = new CarService();
const [cars, setCars] = useState([]);

const notify = () =>
    toast.error("Car deleted!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    useEffect(() => {
      carService.getCars().then((result) => setCars(result.data.data));
    }, []);
    
    const handleDelete = (carId) => {
        carService.delete(carId);
        notify();
    }

  return (
    <Container>
    <h2>Delete A Car</h2>
    <Segment basic size="tiny" color="black" />
    <Grid centered>
      <Grid.Row>
        <Grid.Column width={16}>
          <Card.Group itemsPerRow="5">
            {cars.map((car) => (
              <Card raised key={car.carId}>
                <Image
                      circular
                      size="huge"
                      src={car.carImages[0]?.imagePath}
                    />
                <Card.Content className="montserrat">
                  <Card.Header>{car.carName}</Card.Header>
                </Card.Content>
                <CardContent extra>
                  <Button
                    icon="trash"
                    color="red"
                    floated="right"
                    onClick={() => handleDelete(car.carId)}
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
  )
}
