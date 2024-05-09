import React from 'react';
import './AllCategory.css';
import { assets } from '../../assets/assets';

const AllCategory = () => {
  return (
    <div className='all-category'>
        <div className="card">
            <img src={assets.donut} alt="" />
            <div className="name">
                Donuts
            </div>
        </div>
      
    </div>
  )
}

export default AllCategory
