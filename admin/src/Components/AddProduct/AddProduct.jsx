import React, { useState } from 'react';
import './AddProduct.css';
import upload from '../../assets/upload.png';

const AddProduct = () => {

  //To change the image on upload button
  const [image, setImage] = useState(false);

  const imageHandler = (e)=>{
    setImage(e.target.files[0]);
  }

  //Connect to backend
  const [productDetails, setProductDetails] = useState({
    name:"",
    image:"",
    category:"Donuts",
    price:"",
    description:""
  })


  return (
    <div className="add-product">
    <div className="addproduct-itemfield">
        <p>Food Name</p>
        <input type="text" name="name" placeholder="Type here"/>
    </div>

    <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Price</p>
            <input type="text" name="price" placeholder="Type here"/>
        </div>
    </div>

    <div className="addproduct-itemfield">
            <p>Description</p>
            <input type="text" name="description" placeholder="Type here"/>
        </div>

    <div className="addproduct-itemfield">
        <p>Food Category</p>
        <select name="category" className="add-product-selector">
            <option value="donuts">Donut</option>
            <option value="cupcakes">Cup Cake</option>
            <option value="iclairs">Iclairs</option>
        </select>
    </div>

    <div className="addproduct-itemfield">
      <label htmlFor="file-input">
        <img src={image?URL.createObjectURL(image):upload} alt="" className='addproduct-thumbnail-img'/>
      </label>
      <input onChange={imageHandler} type="file" name="image" id="file-input" hidden/>
    </div>
    <button className='addproduct-btn'>ADD</button>

</div>
  )
}

export default AddProduct
