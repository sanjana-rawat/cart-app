import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

const Header=()=>{
    return(

        <header className="header">
            <div>
                <h1>
                    <Link to="/" className='logo'>
                        SHOPPING CART
                    </Link>
                </h1>
            </div>
            <div className="header-links">
                <ul className="links">
                    <li className='innerLink'>
                        <Link to="/" style={{color:'white'}}>Home </Link>
                        
                    </li>
                    <li className='innerLink'>
                        <Link to="/signup" style={{color:'white'}}>Signup</Link>
                    </li>
                    <li className="innerLink">
                        <Link to="/cart" className='icon'><FaShoppingCart size={40} color={"white"}/></Link>
                       
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;