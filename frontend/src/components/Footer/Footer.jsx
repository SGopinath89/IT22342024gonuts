import React from "react";
import './Footer.css';
import { assets } from '../../assets/assets';



const Footer = () => {
    return(
        <div className='footer'>
            <div className="footer-logo">
                <img src={assets.logo} alt="" />
            </div>
            <ul className="footer-links">
                <li>About</li>
                <li>Products</li>
                <li>Offices</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={assets.linkedin_icon} alt="" />
                </div>

                <div className="footer-icons-container">
                    <img src={assets.facebook_icon} alt="" />
                </div>

                <div className="footer-icons-container">
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>

            <div className="footer-copyright">
                <hr />
                <p>Copyright@GoNuts With DoNuts - ALl Right Reserved</p>
            </div>
            
        </div>
    )
}

export default Footer;
