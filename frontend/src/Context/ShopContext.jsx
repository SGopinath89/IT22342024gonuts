import React, { createContext, useState } from "react";
import {food_list} from "../assets/assets";

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

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product.id===item)
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }


    const getTotalCartItems =() => {
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item] >0){
                totalItem += cartItems[item];
            }
        }

        return totalItem;
    }

    //Data & functions that will be provider in the shopcontext provider as a value, so that it can be used in any component
    const contextValue = {getTotalCartItems, getTotalCartAmount, food_list, cartItems, addToCart, removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;