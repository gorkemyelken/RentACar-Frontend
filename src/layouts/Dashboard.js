import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BrandAdd from '../pages/Admin Pages/BrandAdd'
import ColorAdd from '../pages/Admin Pages/ColorAdd'
import CarDetail from '../pages/CarDetail'
import CarList from '../pages/CarList'
import AboutUsLayout from './AboutUsLayout'
import Footer from './Footer'
import HomeLayout from './HomeLayout'
import Navi from './Navi'


export default function Dashboard() {
  return (
    <div>

      <Navi />
      <Routes>
        <Route exact path="/" element={<HomeLayout />} />
        <Route exact path="/home" element={<HomeLayout />} />
        <Route exact path="/cars" element={<CarList/>} />
        <Route exact path="/aboutus" element={<AboutUsLayout />} />
        <Route exact path="/cars/:id" element={<CarDetail />} />
        <Route exact path="/brands/add" element={<BrandAdd />} />
        <Route exact path="/colors/add" element={<ColorAdd/>} />
      </Routes>

      <Footer />
    </div>
  )
}
