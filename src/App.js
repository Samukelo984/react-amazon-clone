import './App.css';
import {Redirect, Route, Switch} from "react-router-dom"; 
import Header from "./Components/Layout/Header"; 
import Home from "./Components/Home/Home"; 
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/Products/ProductDetails"; 
import Login from "./Components/Login"; 
import NotFound from './Components/NotFound/NotFound';
 
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

    <Route path="*">
      <NotFound /> 
    </Route> 
    </Switch> 

    </main>
    </div>
  );
};    

export default App;

