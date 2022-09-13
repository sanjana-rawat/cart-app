import React,{useState} from "react";
import data from "./components/back/Data/Data";
import Header from"./components/front/Header/Header";
import Routess1 from "./components/front/Routess1/Routes";
import { BrowserRouter as Router } from "react-router-dom";




const App=()=>{
    const {items} =data;
    const[cartItems,setCartItem]=useState([]);

    const handleAddProduct=(product)=> {
      const ProductExist = cartItems.find((item) => item.id === product.id);
      if (ProductExist) {
        setCartItem(
          cartItems.map((item) =>
            item.id === product.id
              ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
              : item
          )
        );
      } else {
        setCartItem([...cartItems, { ...product, quantity: 1 }]);
      }
    };


    return <div>
      <Router>
           <Header/>
           <Routess1
                    items={items} 
                    cartItems={cartItems} 
                    handleAddProduct={handleAddProduct}
           />
      </Router>
     
    </div>

};

export default App;