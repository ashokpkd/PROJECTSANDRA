import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Main from '../components/Main'

const HomePage = () => {
  return (
    <div className=" flex">
    <Sidebar />
    <div className=" w-full">
      <Navbar />
      <Main />
    </div>
  </div>
  )
}

export default HomePage