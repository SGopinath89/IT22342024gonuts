import React, { createContext, useState } from "react";
import {food_list} from '../assets/assets';

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for(let index=0; index < food_list.length+1; index++){
        cart[index] = 0;
    }

    return cart;
}

const ShopContextProvider = (props)=>{

    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    //Data & functions that will be provider in the shopcontext provider as a value, so that it can be used in any component
    const contextValue = {food_list, cartItems, addToCart, removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;