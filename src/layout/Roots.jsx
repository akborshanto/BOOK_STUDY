import React from 'react'
import Navbar from '../shared/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Roots = () => {
  return (
    <div className='container mx-auto  bg-white'>
<Navbar></Navbar>
<Outlet></Outlet>
    </div>
  )
}

export default Roots
