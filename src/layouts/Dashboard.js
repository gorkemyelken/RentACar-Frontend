import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BrandAdd from '../pages/Admin Pages/BrandAdd'
import CarAdd from '../pages/Admin Pages/CarAdd'
import ColorAdd from '../pages/Admin Pages/ColorAdd'
import CarDetail from '../pages/CarDetail'
import CarList from '../pages/CarList'
import SignUp from '../pages/SignUp'
import AboutUsLayout from './AboutUsLayout'
import AdminLayout from './AdminLayout'
import Error404 from './Error404'
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
        {/* <Route exact path="/cars/add" element={<CarAdd/>} /> */}
        <Route exact path="/colors/add" element={<ColorAdd/>} />
        <Route exact path="/adminpanel" element={<AdminLayout/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="*" element={<Error404/>}/>
      </Routes>

      <Footer />
    </div>
  )
}
