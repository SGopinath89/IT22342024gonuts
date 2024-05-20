import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    // Underline Effect
    const [menu, setMenu] = useState("home");
    const [navbarColor, setNavbarColor] = useState("");
    const { getTotalCartItems } = useContext(ShopContext);

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
        if (menuItem === "menu") {
            setNavbarColor("pink"); // Set navbar color to pink when "Menu" is clicked
        } else if (menuItem === "about") {
            setNavbarColor("yellow");
        } else if (menuItem === "login") {
            setNavbarColor("green");
        } else if (menuItem === "cart") {
            setNavbarColor("lightgreen"); // Set navbar color to light green when "Cart" is clicked
        } else {
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
                    <Link to='/cart' onClick={() => handleMenuClick("cart")}><img src={assets.basket_icon} alt="" /></Link> {/* Add onClick handler for the cart icon */}
                    <div className="dot">{getTotalCartItems()}</div>
                </div>
                <div onClick={() => handleMenuClick("login")}>
                    {localStorage.getItem('auth-token') ? (
                        <img className='logout-button'
                            onClick={() => {
                                localStorage.removeItem('auth-token');
                                window.location.replace('/');
                            }} 
                            src={assets.logout} 
                            alt="Logout"
                        />
                    ) : (
                        <Link to='/login'><img src={assets.profile_icon} alt="Profile" /></Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
