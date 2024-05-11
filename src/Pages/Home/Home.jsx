import React from 'react'
import Header from '../../Components/Header/Header'
import SideBar from '../../Components/SideBar/SideBar'

export default function Home() {
  return (
    <div className='home-container d-flex flex-column '>
        <Header />
        <SideBar />
    </div>
  )
}
