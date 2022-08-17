import React from 'react'
import { Card, Container, Icon, Button } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

export default function AdminLayout() {
    return (
        <Container><br />
            <br />
            <h2>Admin Panel</h2>
            <hr />
            <Card.Group itemsPerRow={2}>
                <Card>
                    <Card.Content header='BRANDS'></Card.Content>
                    <Card.Content>
                        <Button as={NavLink} to="/brands/add" circular color='green'>
                            Add A Brand
                        </Button>
                        <Button circular color='teal'>
                            Update A Brand
                        </Button>
                        <Button circular color='red'>
                            Delete A Brand
                        </Button>
                    </Card.Content>
                    <Card.Content extra>
                    <Button circular color='grey'>
                            View All Brands
                        </Button>
                    </Card.Content>
                </Card>
                <Card>
                <Card.Content header='CARS' />
                    <Card.Content>
                        <Button as={NavLink} to="/cars/add" circular color='green'>
                            Add A Car
                        </Button>
                        <Button circular color='teal'>
                            Update A Car
                        </Button>
                        <Button circular color='red'>
                            Delete A Car
                        </Button>
                    </Card.Content>
                    <Card.Content extra>
                    <Button circular color='grey'>
                            View All Cars
                        </Button>
                    </Card.Content>
                </Card>
                <Card>
                <Card.Content header='COLORS' />
                    <Card.Content>
                        <Button as={NavLink} to="/colors/add" circular color='green'>
                            Add A Color
                        </Button>
                        <Button circular color='teal'>
                            Update A Color
                        </Button>
                        <Button circular color='red'>
                            Delete A Color
                        </Button>
                    </Card.Content>
                    <Card.Content extra>
                    <Button circular color='grey'>
                            View All Colors
                        </Button>
                    </Card.Content>
                </Card>
                <Card>
                <Card.Content header='CUSTOMERS' />
                    <Card.Content>
                        <Button as={NavLink} to="/customers/add" circular color='green'>
                            Add A Customer
                        </Button>
                        <Button circular color='teal'>
                            Update A Customer
                        </Button>
                        <Button circular color='red'>
                            Delete A Customer
                        </Button>
                    </Card.Content>
                    <Card.Content extra>
                    <Button circular color='grey'>
                            View All Customers
                        </Button>
                    </Card.Content>
                </Card>
                <Card>
                <Card.Content header='RENTALS' />
                    <Card.Content>
                        <Button circular color='teal'>
                            Update A Rental
                        </Button>
                        <Button circular color='red'>
                            Delete A Rental
                        </Button>
                    </Card.Content>
                    <Card.Content extra>
                    <Button circular color='grey'>
                            View All Rentals
                        </Button>
                    </Card.Content>
                </Card>
            </Card.Group>
        </Container>
    )
}
