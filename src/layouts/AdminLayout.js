import React from 'react'
import { Card, Container, Button, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

export default function AdminLayout() {
    return (
        <Container><br />
            <br />
            <h2>Admin Panel</h2>
            <hr />
            <Card.Group itemsPerRow={3}>
                <Card color='red'>
                    <Card.Content header='BRANDS'></Card.Content>
                    <Card.Content>
                        <Button as={NavLink} to="/brands/add" circular color='green'>
                            <Icon name="add" />
                            Add A Brand
                        </Button>
                        <br/><br/>
                        <Button as={NavLink} to="/brands/update" circular color='teal'>
                            <Icon name="level up" />
                            Update A Brand
                        </Button>
                        <br/><br/>
                        <Button as={NavLink} to="/brands/delete" circular color='red'>
                            <Icon name="trash" />
                            Delete A Brand
                        </Button>
                    </Card.Content>
                </Card>
                <Card color='red'>
                    <Card.Content header='CARS' />
                    <Card.Content>
                        <Button as={NavLink} to="/cars/add" circular color='green'>
                            <Icon name="add" />
                            Add A Car
                        </Button>
                        <br/><br/>
                        <Button as={NavLink} to="/cars/update" circular color='teal'>
                            <Icon name="level up" />
                            Update A Car
                        </Button>
                        <br/><br/>
                        <Button as={NavLink} to="/cars/delete" circular color='red'>
                            <Icon name="trash" />
                            Delete A Car
                        </Button>
                    </Card.Content>
                </Card>
                <Card color='red'>
                    <Card.Content header='COLORS' />
                    <Card.Content>
                        <Button as={NavLink} to="/colors/add" circular color='green'>
                            <Icon name="add" />
                            Add A Color
                        </Button>
                        <br/><br/>
                        <Button as={NavLink} to="/colors/update" circular color='teal'>
                            <Icon name="level up" />
                            Update A Color
                        </Button>
                        <br/><br/>
                        <Button as={NavLink} to="/colors/delete" circular color='red'>
                            <Icon name="trash" />
                            Delete A Color
                        </Button>
                    </Card.Content>
                </Card>
            </Card.Group>
        </Container>
    )
}
