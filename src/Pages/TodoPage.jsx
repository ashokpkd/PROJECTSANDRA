import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
const TodoPage = () => {
  return (
<div className=" flex">
    <Sidebar />
    <div className=" w-full">
              <Navbar />
              <div>your todos♣</div>
    </div>
  </div>  )
}

export default TodoPage