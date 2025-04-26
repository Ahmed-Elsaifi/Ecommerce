import React from 'react'
import styles from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'


const Layout = () => {
  return (
    <>
    <Navbar/>
   <div className='min-h-dvh center mt-[75px] ' >

   <div className='container text-center  ' >

<Outlet/>
</div>
   </div>

    <Footer/>
    </>
  )
}
export default Layout
