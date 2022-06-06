import React, {Fragment, useState} from "react"; 
// import ReactDOM from "react-dom";
import Modal from "./Modal/Modal"; 

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
        <h1>Sign in Page</h1>  
        <button onClick={() =>setIsOpen(true)}>
          Open Modal
        </button>
        {isOpen &&
        // ReactDOM.createPotal(
          <Modal setIsOpen={setIsOpen} />}  
        {/* //   document.getElementById("modal-root-div") */}
    
    </Fragment> 
  ) 
};  

export default Login; 