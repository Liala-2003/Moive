import React, { Fragment } from 'react'
import Navigation from '../navbar/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
function Layout() {
  return (
  <Fragment>
     <Navigation/>
     <Outlet/>
     <Footer/>
  </Fragment>
  )
}

export default Layout
