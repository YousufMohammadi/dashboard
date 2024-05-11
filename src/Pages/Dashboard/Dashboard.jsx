import React from 'react'
import Header from '../../Components/Header/Header'
import SideBar from '../../Components/SideBar/SideBar'
import "../Dashboard/Dashboard.css"
export default function Dashboard() {
  return (
    <div className='dashboard-container'>
        <Header />
        <SideBar />
        <div className="content"></div>
    </div>
  )
}
