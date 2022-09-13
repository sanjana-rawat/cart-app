import React from "react";

const Cart = ({ cartItems }) => {
    return (
        <div className="cart-items">
            <div className="cart-item-header">Cart Items</div>

            {cartItems.length === 0 && (
                <div>
                    No items are added
                </div>
            )}
            <div>
            {cartItems.map((item)=>(
                <div className="cart-items">
                    <div>
                    <img src={item.image} alt={item.name}/>
                    </div>
                    <div>
                        <h3 className="productName">{item.name}</h3>
                    </div>
                    
                    <div className="productPrice">
                        price:{item.price}
                    </div>
                    <div>
                        <button className="product-add">X</button>
                    </div>
                </div>
                
            ))
           }
            </div>

        </div>
    )
}

export default Cart;