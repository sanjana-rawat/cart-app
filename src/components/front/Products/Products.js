import React from "react";
import "./Products.css"

const Products=({items,handleAddProduct})=>{
    return(
        <div className="productItems">
           {items.map((product)=>(
                <div className="card">
                    <div>
                    <img src={product.image} alt={product.name}/>
                    </div>
                    <div>
                        <h3 className="productName">{product.name}</h3>
                    </div>
                    
                    <div className="productPrice">
                        price:{product.price}
                    </div>
                    <div>
                        <button className="product-add" onClick={()=>handleAddProduct(product)}>Add to Cart</button>
                    </div>
                </div>
                
            ))
           }
        </div>
      
    );
};

export default Products;