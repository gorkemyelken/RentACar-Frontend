import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import CustomerService from "../services/customerService";
import { Container, Grid, Form, Button, Checkbox} from "semantic-ui-react";

export default function SignUp() {
    const [, setOpen] = useState(false);

    let customerService = new CustomerService();

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        nationalityNumber: "",
        birthYear: "",
        password: "",
    };

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        customerService.add(values);
        handleModal(true);
        setTimeout(() => {
            resetForm();
        }, 100);
    };

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
    });

    const handleModal = (value) => {
        setOpen(value);
    };

    const handleChange = (fieldName, value) => {
        formik.setFieldValue(fieldName, value);
    };

    return (
        <Container>
            <br />
            <br />
            <h2>Sign Up</h2>
            <hr />
            <Grid centered>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Formik>
                            <Form onSubmit={formik.handleSubmit}>
                                <Form.Input
                                    name="firstName"
                                    label="First Name"
                                    placeholder="First Name"
                                    required
                                    onChange={(event, data) => handleChange("firstName", data.value)}
                                    value={formik.values.firstName}
                                />
                                <Form.Input
                                    name="lastName"
                                    label="Last Name"
                                    placeholder="Last Name"
                                    required
                                    onChange={(event, data) => handleChange("lastName", data.value)}
                                    value={formik.values.lastName}
                                />
                                <Form.Input
                                    name="email"
                                    label="Email"
                                    placeholder="example@example.com"
                                    required
                                    onChange={(event, data) => handleChange("email", data.value)}
                                    value={formik.values.email}
                                />
                                <Form.Input
                                    name="nationalityNumber"
                                    label="Nationality Number"
                                    placeholder="XXXXXXXXXXX"
                                    required
                                    onChange={(event, data) => handleChange("nationalityNumber", data.value)}
                                    value={formik.values.nationalityNumber}
                                />
                                <Form.Input
                                    name="birthYear"
                                    label="Birth Year"
                                    placeholder="YYYY"
                                    required
                                    onChange={(event, data) => handleChange("birthYear", parseInt(data.value))}
                                    value={formik.values.birthYear}
                                />
                                <Form.Input
                                    name="password"
                                    label="Password"
                                    placeholder="******"
                                    required
                                    type="password"
                                    onChange={(event, data) => handleChange("password", data.value)}
                                    value={formik.values.password}
                                />
                                <br />
                                <Form.Field>
                                    <Checkbox label='I agree to the Terms and Conditions.' />
                                </Form.Field>
                                <Button circular fluid type="submit" color="green" content="Sign Up" />
                            </Form>
                        </Formik>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}