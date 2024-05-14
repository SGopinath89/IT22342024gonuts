import React from 'react';
import './AddProduct.css';

const AddProduct = () => {
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
        <p>Food Category</p>
        <select name="category" className="add-product-selector">
            <option value="donuts">Donut</option>
            <option value="cupcakes">Cup Cake</option>
            <option value="iclairs">Iclairs</option>
        </select>
    </div>

    <div className="addproduct-itemfield">
      <label htmlFor="file input">
  
      </label>
    </div>
</div>
  )
}

export default AddProduct
