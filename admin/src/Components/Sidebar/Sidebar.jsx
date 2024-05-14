import React, { useState } from "react";
import './Sidebar.css';
import { Link } from 'react-router-dom';
import add_product_icon from '../../assets/add.png';
import list_product_icon from '../../assets/list.png';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (index) => {
        setActiveItem(index);
    };

    return (
        <div className="sidebar">
            <Link to={'/addproduct'} style={{textDecoration: 'none'}}>
                <div className={`sidebar-item ${activeItem === 0 ? 'clicked' : ''}`} onClick={() => handleItemClick(0)}>
                    <img src={add_product_icon} alt="" />  
                    <p>Add Food</p>  
                </div>            
            </Link>

            <Link to={'/listproduct'} style={{textDecoration: 'none'}}>
                <div className={`sidebar-item ${activeItem === 1 ? 'clicked' : ''}`} onClick={() => handleItemClick(1)}>
                    <img src={list_product_icon} alt="" />  
                    <p>List Foods</p>  
                </div>            
            </Link>
        </div>
    );
}

export default Sidebar;
