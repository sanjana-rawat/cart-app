import React from 'react';
import Products from '../Products/Products';
import Signup from "../Signup/Signup"
import Cart from '../Cart/Cart';
import { Route,Routes } from 'react-router-dom';

const Routess1=({items,cartItems,handleAddProducts})=>{
    return(
        <div>
            <Routes>
                <Route path="/" exact element={<Products items={items}/>} handleAddProducts={handleAddProducts}/>

                <Route path="/signup" element={ <Signup/>}/>

                <Route path="/cart" element={<Cart cartItems={cartItems}/>} handleAddProducts={handleAddProducts}/>
                   
            
            </Routes>

        </div>
    ); 
};

export default Routess1;