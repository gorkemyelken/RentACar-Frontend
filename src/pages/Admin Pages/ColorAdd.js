import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import ColorService from "../../services/colorService";
import { Container, Grid, Form, Button } from "semantic-ui-react";

export default function ColorAdd() {
    const [open, setOpen] = useState(false);

    let colorService = new ColorService();

    const initialValues = {
        color: "",
    };

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        colorService.add(values);
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
            <h2>Add A Color</h2>
            <hr />
            <Grid centered>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Formik>
                            <Form onSubmit={formik.handleSubmit}>
                                <Form.Input
                                    name="Color Name"
                                    label="Color" centered
                                    onChange={(event, data) => handleChange("colorName", data.value)}
                                    value={formik.values.colorName}
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