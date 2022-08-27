// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import {
//   Container,
//   Grid,
//   Form,
//   Input,
//   Button,
//   Label, 
//   Select
// } from "semantic-ui-react";
// import CarService from "../../services/carService";
// import * as yup from "yup";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import BrandService from "../../services/brandService";

// export default function CarAdd() {
//   let carService = new CarService();
//   let brandService = new BrandService();

//   const [brands, setBrands] = useState([]);

// //   brandOptions = () => {
// //     const arr = [];
    
// //     arr.push(brands[0].brandName)

// //     return arr;
// //   }

//   useEffect(() => {
//     brandService.getBrands().then((result) => setBrands(result.data.data));
//   }, []);


//   const notifySuccess = () =>
//     toast.success("Car added!", {
//       position: "bottom-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });

//   const validationSchema = yup.object().shape({
//     carName: yup.string().required("Required field."),
//   });

//   const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
//     useFormik({
//       initialValues: {
//         carName: "",
//         brand: "",
//         color: "",
//         dailyPrice: "",
//         modelYear: "",
//         description: "",
//       },
//       onSubmit: (values, { resetForm }) => {
//         console.log(values);
//         carService.add(values);
//         resetForm();
//         notifySuccess();
//       },
//       validationSchema,
//     });

//   return (
//     <Container>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//       <br />
//       <br />
//       <h2>Add A Car</h2>
//       <hr />
//       <Grid centered>
//         <Grid.Row>
//           <Grid.Column width={8}>
//             <Form onSubmit={handleSubmit}>
//               <h3>Car Name</h3>
//               <Input
//                 fluid
//                 name="carName"
//                 value={values.carName}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.carName && touched.carName && (
//                 <Label basic color="red" pointing="above">
//                   {errors.carName}
//                 </Label>
//               )}
//               <h3>Brand</h3>
//               <select
//                   name='brand'
//                   value={values.brandId}
//                   onChange={handleChange}
//                 >
                  
//                     <option>Brand</option>
                   
                    
//                 </select>

//               {errors.brand && touched.brand && (
//                 <Label basic color="red" pointing="above">
//                   {errors.brand}
//                 </Label>
//               )}
//               <h3>Color</h3>
//               <Input
//                 fluid
//                 name="color"
//                 value={values.colorId}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.color && touched.color && (
//                 <Label basic color="red" pointing="above">
//                   {errors.color}
//                 </Label>
//               )}
//               <h3>Daily Price</h3>
//               <Input
//                 fluid
//                 name="dailyPrice"
//                 value={values.dailyPrice}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.dailyPrice && touched.dailyPrice && (
//                 <Label basic color="red" pointing="above">
//                   {errors.dailyPrice}
//                 </Label>
//               )}
//               <h3>Model Year</h3>
//               <Input
//                 fluid
//                 name="modelYear"
//                 value={values.modelYear}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.modelYear && touched.modelYear && (
//                 <Label basic color="red" pointing="above">
//                   {errors.modelYear}
//                 </Label>
//               )}
//               <h3>Description</h3>
//               <Input
//                 fluid
//                 name="description"
//                 value={values.description}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.description && touched.description && (
//                 <Label basic color="red" pointing="above">
//                   {errors.description}
//                 </Label>
//               )}
//               <br />
//               <br />
//               <Button fluid color="green" type="submit">
//                 Submit
//               </Button>
//               <code>{JSON.stringify(values)}</code>
//             </Form>
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     </Container>
//   );
// }
