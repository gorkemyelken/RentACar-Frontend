import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import BrandService from "../../services/brandService";
import { Container, Grid, Form, Button } from "semantic-ui-react";

export default function BrandAdd() {
    const [open, setOpen] = useState(false);

    let brandService = new BrandService();

    const initialValues = {
        brand: "",
    };

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        brandService.add(values);
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
            <h2>Add A Brand</h2>
            <hr />
            <Grid centered>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Formik>
                            <Form onSubmit={formik.handleSubmit}>
                                <Form.Input
                                    name="Brand Name"
                                    label="Brand" centered
                                    onChange={(event, data) => handleChange("brandName", data.value)}
                                    value={formik.values.brandName}
                                />
                                <Form.Input
                                    name="Brand Logo"
                                    label="Brand Logo Path"
                                    onChange={(event, data) => handleChange("brandImagePath", data.value)}
                                    value={formik.values.brandImagePath}
                                />
                                <br />
                                <Button circular fluid type="submit" color="green" content="Add" />
                            </Form>
                        </Formik>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}