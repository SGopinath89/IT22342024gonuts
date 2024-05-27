import React from "react";
import './Footer.css';
import { assets } from '../../assets/assets';
import { useLocation } from "react-router-dom";



const Footer = () => {

    const location = useLocation();

    const getFooterColor = () => {
        switch (location.pathname) {
            case '/allcategory':
                return 'pink';
            case '/about':
                return 'yellow';
            case '/login':
                return 'green';
            case '/cart':
                return 'lightgreen';
            default:
                return '';
        }
    };

    return(
        <div className={`footer ${getFooterColor()}`}>
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
