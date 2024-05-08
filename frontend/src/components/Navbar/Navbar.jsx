import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {

    //Underline Effect
    const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <li className={menu==="home"?"active":""}>Home</li>
            <li className={menu==="menu"?"active":""}>Menu</li>
            <li className={menu==="about"?"active":""}>About</li>
            <li className={menu==="contact"?"active":""}>Contact</li>
        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <img src={assets.profile_icon} alt="" />
        </div>
      
    </div>
  )
}

export default Navbar
