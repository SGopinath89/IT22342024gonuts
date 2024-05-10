import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // Underline Effect
    const [menu, setMenu] = useState("home");
    const [navbarColor, setNavbarColor] = useState("");

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
        if (menuItem === "menu") {
            setNavbarColor("pink"); // Set navbar color to pink when "Menu" is clicked
        }
        else if(menuItem === "about"){
            setNavbarColor("yellow");
        }
        else if(menuItem === "login"){
            setNavbarColor("green");
        }
        else {
            setNavbarColor("");
        }
    };

    return (
        <div className={`navbar ${navbarColor}`}>
            <img src={assets.logo} alt="" className="logo" />
            <ul className="navbar-menu">
                <li onClick={() => handleMenuClick("home")} className={menu === "home" ? "active" : ""}><Link to='/'>Home</Link></li>
                <li onClick={() => handleMenuClick("menu")} className={menu === "menu" ? "active" : ""}><Link to='/allcategory'>Menu</Link></li>
                <li onClick={() => handleMenuClick("about")} className={menu === "about" ? "active" : ""}><Link to='/about'>About</Link></li>
                <li onClick={() => handleMenuClick("contact")} className={menu === "contact" ? "active" : ""}>Contact</li>
            </ul>

            <div className="navbar-right">
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                    <div className="dot"></div>
                </div>
                <div onClick={() => handleMenuClick("login")}><Link to='/login'><img src={assets.profile_icon} alt="" /></Link></div>
            </div>
        </div>
    )
}

export default Navbar;
