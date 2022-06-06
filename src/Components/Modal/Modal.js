import React, { Fragment } from "react"; 
import "./Modal.css";

const Modal = ({setIsOpen}) => {
  return (
    <Fragment> 
        <div className="modal-div" onClick={() =>setIsOpen(false)} >
            <div className="modalStyle">  
                <h3>Test Modal</h3>
                <button onClick={() =>setIsOpen(false)}>
                    Close
                </button>
                <p>This is a simple modal</p>
            </div>  
        </div>
    </Fragment>
  )
};  

export default Modal;  