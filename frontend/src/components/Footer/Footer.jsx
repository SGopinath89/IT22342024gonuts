import React from "react";
import './Footer.css';
import { assets } from '../../assets/assets';



const Footer = () => {
    return(
        <div className='footer'>
            <div className="footer-logo">
                
                <p>Dreamy</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
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
                <p>Copyright@Ruwini Tharanga - ALl Right Reserved</p>
            </div>
            
        </div>
    )
}

export default Footer;
