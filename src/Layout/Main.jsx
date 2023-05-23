import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'
import Header from '../shared/Header'

function Main() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main