import React from 'react'
import NavBar from './Pages/Header/navBar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
   <>
    <NavBar />
    <Outlet />
   </>
  )
}

export default Layout