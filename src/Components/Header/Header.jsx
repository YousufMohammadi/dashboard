import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { IoSearch,IoNotifications } from "react-icons/io5";
import { FaMoon,FaShoppingCart } from "react-icons/fa";

import "../Header/Header.css"
export default function Header() {
  return (
    <header className='header-container px-3 d-flex flex-row justify-content-between align-items-center'>
        <div className="d-flex flex-row justify-content-start align-items-center gap-3">
        <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
        <div className="d-flex flex-row justify-content-start align-items-center gap-1">
            <img src="logo.png" alt="logo" className='logo rounded-circle' />
            <span className='brand fs-3 fw-bolder'>Oxygen</span>
        </div>
        <div className="ms-2 search-container">
            <input type="search" placeholder='Search ...' className='rounded-pill'/>
            <IoSearch className='search-icon'/>
        </div>
        </div>
        <div className="container d-flex flex-row justify-content-end align-items-center gap-2">
            <a href="#" className='header-icon'><FaMoon /></a>
            <a href="#" className='header-icon'><FaShoppingCart /> <span className='notification'>3</span></a>
            <a href="#" className='header-icon'><IoNotifications /> <span className='notification notification-bill'>3</span></a>
            <a href="#"><img src="profile.png" alt="profile" className='profile rounded-circle' /></a>
        </div>
    </header>
  )
}
