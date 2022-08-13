import React from 'react'
import { Route } from 'react-router-dom'
import CarLayout from './CarLayout'
import Footer from './Footer'
import HomeLayout from './HomeLayout'
import Navi from './Navi'

export default function Dashboard() {
  return (
    <div>
        <Navi/>
        <Footer/>
    </div>
  )
}
