import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CarDetail from '../pages/Cars/CarDetail'
import AboutUsLayout from './AboutUsLayout'
import CarLayout from './CarLayout'
import Footer from './Footer'
import HomeLayout from './HomeLayout'
import Navi from './Navi'


export default function Dashboard() {
  return (
    <div>
      
        <Navi/>
        <Routes>
        <Route exact path="/" element={<HomeLayout/>}/>
        <Route exact path="/home" element={<HomeLayout/>}/>
          <Route exact path="/cars" element={<CarLayout/>}/>
          <Route exact path="/aboutus" element={<AboutUsLayout/>}/>
          <Route exact path="/cars/:id" element={<CarDetail/>}/>
        </Routes>
        
        <Footer/>
    </div>
  )
}
