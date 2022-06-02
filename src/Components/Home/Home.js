import "./Home.css"; 
import React from "react";  
import Products from "../Products/Products";   


const Home = () => {
  return (
    <div className="home"> 
     <div className="home-container">
       <img className="home-image" src="https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg" alt="Hero image" /> 

       <Products />
     </div>  
    </div>  
  ); 
};

export default Home;   