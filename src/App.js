import './App.css';
import {Route} from "react-router-dom"; 
import Header from "./Components/Layout/Header"; 
import Home from "./Components/Home/Home"
import Products from './Components/Products/Products';
 
const App = () => { 
  return (
    <div> 
      <Header /> 

    <main> 
     <Route path="/home">
      <Home />
    </Route>

    <Route path="/products">
      <Products />
    </Route>
    </main>
    </div>
  );
};    

export default App;

