import React, { useContext } from "react";
import './ProductDisplay.css';
import { ShopContext } from "../../Context/ShopContext";


const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

    return(
        <div className="productdisplay">
            <div className="display">
            <img className="productdisplay-main-img" src={product.image} alt="" />
           
           <div className="productdisplay-right">
               <h1>{product.name}</h1>
               <div className="productdisplay-right-price">Rs.{product.price}.00</div>

               <div className="productdisplay-right-description">
                   {product.description}
               </div>
               <p className="productdisplay-right-category"><span>Category :</span>{product.category}</p>

               <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
               
           </div>

            </div>
            

        </div>
    )
}

export default ProductDisplay;