import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const JournalPage = () => {
  return <div className=" flex">
    <Sidebar />
    <div className=" w-full">
          <Navbar />
          <div>you</div>
    </div>
  </div>  
}

export default JournalPage