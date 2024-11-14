import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar'
import { Footer } from '../footer'

const Layout = () => {
  return (
    <div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
