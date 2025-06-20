import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'



const Layout = () => {

    //const location = useLocation()

  // Match home page exactly — adjust for subfolder if deployed under /ppf-gold/
  //const isHome = location.pathname === '/'
  return (
    <>
    <Navbar />
    <main className={'pt-[clamp(5rem,8vw,6rem)]'}>
        <Outlet />
      </main>
    <Footer />
    </>
  )
}

export default Layout
