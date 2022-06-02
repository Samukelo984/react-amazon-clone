import "./Header.css"; 
import React from "react"; 
import { Link, NavLink } from "react-router-dom"; 
import SearchIcon from "@mui/icons-material/Search"; 
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"; 



const Header = () => {
  return (
    <header className="header"> 
    <Link to="/">
        <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo" /> 
    </Link>   
        <div className="header-search">
            <input className="header-input" type="text" />
            <SearchIcon className="search-icon" />  
        </div>

        <div className="header-nav">
            <Link to="/login">
            <div className="header-option">
                <span className="header-optionOne">Hello Guest</span>
                <span className="header-optionTwo"> Sign In</span>
            </div> 
            </Link>

            <div className="header-option">
                <span className="header-optionOne">Returns</span>
                <span className="header-optionTwo"> & Orders</span>
            </div>

            <div className="header-option">
                <span className="header-optionOne">Your</span>
                <span className="header-optionTwo"> Prime</span>
            </div>

            <div className="header-optionBasket">
                <ShoppingBasketIcon />
                <span className="header-optionTwo header-basketCount">0</span> 

            </div>
        </div>
    </header>
  )
}

export default Header; 