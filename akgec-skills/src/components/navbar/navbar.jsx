import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css"
import logo from '../../assets/logo.svg';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='akgec__navbar'>
      <div className='akgec__navbar-links'>
        <div className='akgec__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className="akgec__navbar-links_container">
          <p><a href='#home'>Home</a></p>
          <p><a href='#wakgec'>Program</a></p>
          <p><a href='#Instructor'>Instructor</a></p>
          <p><a href='#technology'>Registration</a></p>
        </div>
      </div>

      <div className="akgec__navbar-contact">
          <button type='button'>Contact us</button>
      </div>

      <div className="akgec__navbar-menu">
        {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick = { () => setToggleMenu(false)}/>
        : <RiMenu3Line color="#fff" size={27} onClick = { () => setToggleMenu(true)}/>
      }
      {toggleMenu && (
        <div className='akgec__navbar-menu__container scale-up-center'>
          <div className='akgec__navbar-menu_container-links'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wakgec'>What is Akgec Skills?</a></p>
          <p><a href='#programs'>Program</a></p>
          <p><a href='#team'>Team</a></p>
          <p><a href='#technology'>Registration</a></p>
          </div>
          <div className="akgec__navbar-menu_container-links-contact">
          <button>Contact us</button>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar