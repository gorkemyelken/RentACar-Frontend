import React from "react";
import { Route, Routes } from "react-router-dom";
import BrandAdd from "../pages/Admin Pages/BrandAdd";
import BrandDelete from "../pages/Admin Pages/BrandDelete";
import CarAdd from "../pages/Admin Pages/CarAdd";
import CarDelete from "../pages/Admin Pages/CarDelete";
import ColorAdd from "../pages/Admin Pages/ColorAdd";
import ColorDelete from "../pages/Admin Pages/ColorDelete";
import CarDetail from "../pages/CarDetail";
import CarList from "../pages/CarList";
import Rental from "../pages/Rental";
import SignUp from "../pages/SignUp";
import AboutUsLayout from "./AboutUsLayout";
import AdminLayout from "./AdminLayout";
import Error404 from "./Error404";
import Footer from "./Footer";
import HomeLayout from "./HomeLayout";
import Navi from "./Navi";

export default function Dashboard() {
  return (
    <div>
      <Navi />
      <Routes>
        <Route exact path="/" element={<HomeLayout />} />
        <Route exact path="/home" element={<HomeLayout />} />
        <Route exact path="/aboutus" element={<AboutUsLayout />} />
        <Route exact path="/adminpanel" element={<AdminLayout />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="*" element={<Error404 />} />

        <Route exact path="/cars" element={<CarList />} />      
        <Route exact path="/cars/:id" element={<CarDetail />} />
        <Route exact path="/cars/add" element={<CarAdd />} />   
        <Route exact path="/cars/delete" element={<CarDelete/>} />

        <Route exact path="/brands/add" element={<BrandAdd />} />
        <Route exact path="/brands/delete" element={<BrandDelete />} />

        <Route exact path="/colors/add" element={<ColorAdd />} />
        <Route exact path="/colors/delete" element={<ColorDelete />} />
        
        <Route exact path="/rentals/add/:id" element={<Rental />} />
      </Routes>

      <Footer />
    </div>
  );
}
