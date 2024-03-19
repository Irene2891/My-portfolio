// import React from 'react'
// // import { Outlet } from 'react-router-dom'

// const Layout = () => {
//   return (
//    <>
//     <NavBar />
//     <Outlet />
//    </>
//   )
// }

// export default Layout

import React from 'react'
import './layout.css'

  const Layout = ({children}) => {
    return (
        <div className='layout'> {children} </div>
    )
}
export default Layout