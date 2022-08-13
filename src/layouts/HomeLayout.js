import React from 'react'
import { Image, Grid, Form, Button, Checkbox, Step } from 'semantic-ui-react'
import wpleft from '../images/wp-left.jpg'
import wpright from '../images/wp-right.jpg'
import BrandList from '../pages/Brands/BrandList'

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
        <div>
            <Grid columns='equal'>
                <Grid.Row>
                    <Grid.Column>
                        <Image src={wpleft} />
                    </Grid.Column>
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
                            <Form.Field>
                                <Checkbox label='I have read and accept the Rental Conditions.' />
                            </Form.Field>
                            <Button type='submit'>Create Reservation</Button>
                        </Form>
                    </Grid.Column>
                    <Grid.Column>
                        <Image className='homeImageRight' src={wpright} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
