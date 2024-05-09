import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className='header'>

        <div className="header-left">
            <img src={assets.header_img} alt="" />
        </div>

        <div className="header-right">
            <h1>Hello Sweet Lovers</h1>
            <p>Indulge in the exquisite delights of your favorite confections and let them serenade your senses with their sweet symphony</p>
            <button>View Menu</button>  
        </div>
        
        
    </div>
  )
}

export default Header
