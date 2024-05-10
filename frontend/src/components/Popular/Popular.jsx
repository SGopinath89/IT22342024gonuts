import React from 'react';
import './Popular.css';
import {popular_food_list} from '../../assets/assets';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR OF THE WEEK</h1>
        <hr />
        <div className="popular-item">
          {popular_food_list.map((item, i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
          })}
        </div>
      
    </div>
  )
}

export default Popular
