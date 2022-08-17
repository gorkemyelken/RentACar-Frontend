import React from 'react'
import { Grid, Form, Button, Step } from 'semantic-ui-react'
import BrandList from '../pages/BrandList'

export default function HomeLayout() {
    const steps = [
        {
            key: 'Search',
            icon: 'search',
            title: 'Search',
        },
        {
            key: 'Book',
            icon: 'edit outline',
            title: 'Book',
        },
        {
            key: 'Rent Vehicle',
            icon: 'payment',
            title: 'Rent Vehicle'
        }
    ]
    return (
        <div className='homeLayout'>
            <Grid columns='equal'>
                <Grid.Row>
                    <Grid.Column/>
                    <Grid.Column width={8}><br /><br />
                        <h1 className='homeHeader'>Rent A Car</h1>
                        <Step.Group size='huge' items={steps} />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h2>Brands</h2>
                        <hr />
                        <BrandList />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h2>Reservation</h2>
                        <hr />
                        <Form>
                            <Form.Group>
                                <Form.Input label='Rent Date' placeholder='yyyy-mm-dd' width={8} />
                                <Form.Input label='Return Date' placeholder='yyyy-mm-dd' width={8} />
                            </Form.Group>
                            <Button type='submit'>Search</Button>
                        </Form>
                    </Grid.Column>
                    <Grid.Column/>
                </Grid.Row>
            </Grid>
        </div>
    )
}
