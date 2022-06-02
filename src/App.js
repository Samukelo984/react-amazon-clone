import './App.css';
import {Redirect, Route, Switch} from "react-router-dom"; 
import Header from "./Components/Layout/Header"; 
import Home from "./Components/Home/Home"; 
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/Products/ProductDetails"; 
import Login from "./Components/Login"; 
 
const App = () => {  
  return ( 
    <div> 
      <Header /> 

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
      <Login />
    </Route> 
    </Switch> 

    </main>
    </div>
  );
};    

export default App;

