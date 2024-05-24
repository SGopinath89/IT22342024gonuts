import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <Link to={`/product/${props.id}`}>
    <div className='item'>

     <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />


      <div className="description">
        <p>{props.name}</p>
        <div className='item-price'>Rs.{props.price}.00</div>
      </div>
      
    </div>
    </Link>
  )
}

export default Item
