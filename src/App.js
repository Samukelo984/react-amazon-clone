import './App.css';
import {Route, Switch} from "react-router-dom"; 
import Header from "./Components/Layout/Header"; 
import Home from "./Components/Home/Home"
import Products from './Components/Products/Products';
import ProductDetails from './Components/ProductDetails';
 
const App = () => { 
  return (
    <div> 
      <Header /> 

    <main> 
      <Switch> 
     <Route path="/home">
      <Home />
    </Route>

    <Route path="/products" exact> 
      <Products />
    </Route>

    <Route path="/products/:id">
      <ProductDetails />  
    </Route> 
    </Switch> 

    </main>
    </div>
  );
};    

export default App;

