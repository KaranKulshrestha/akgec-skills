import React from 'react'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css"
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <div className='akgec__navbar'>
      <div className='akgec__navbar-links'>
        <div className='akgec__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className="akgec__navbar-links_container">
          <p><a href='#home'>Home</a></p>
          <p><a href='#wakgec'>What is Akgec Skills?</a></p>
          <p><a href='#programs'>Programs</a></p>
          <p><a href='#technology'>Technology</a></p>
          <p><a href='#team'>Team</a></p>
        </div>
        <div className="akgec__navbar-contact">
          <button>Contact us</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar