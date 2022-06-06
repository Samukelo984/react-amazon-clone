import React, {useEffect, useState } from "react"; 
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom"; 
import Header from "./Components/Layout/Header"; 
import Home from "./Components/Home/Home"; 
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/Products/ProductDetails"; 
import Login from "./Components/Login/Login";  
import NotFound from './Components/NotFound/NotFound';

   
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("isLoggedIn");
    if (userInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }; 

  return ( 
    <div> 
      <Header 
      isAuthenticated={isLoggedIn} 
      onLogout={logoutHandler} /> 

    <main> 
      <Switch>  
        <Route path="/" exact> 
          <Redirect to="/home" />  
        </Route>
     <Route path="/home">
      <Home />  
    </Route>

    <Route path="/products" exact> 
      <Products />
    </Route>

    <Route path="/products/:id">
      <ProductDetails />   
    </Route> 

    <Route path="/login">
      <Login onLogin={loginHandler} />
    </Route>  

    <Route path="*">
      <NotFound /> 
    </Route> 
    </Switch> 

    </main>
    </div>
  );
};    

export default App;
 
