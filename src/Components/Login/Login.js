import React, {useState, useRef} from "react"; 
import {Link} from "react-router-dom"; 
import "./Login.css"; 


const Login = () => { 
const emailRef = useRef();
const passwordRef = useRef(); 

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");  

  // const emailChangeHandler = (event) => {
  //   setEmail(event.target.value); 
  // }

  // const passwordChangeHandler = (event) => {
  //   setPassword(event.target.value); 
  // }
 
  const signIn = (event) => {
    event.preventDefault(); 
    const enteredEmail = emailRef.current.value; 
    const enteredPassword = passwordRef.current.value;  

    console.log(" email: ", enteredEmail  +  " password: ", enteredPassword);  
  }
 
 

  return (
    <div className="login"> 
       <Link to="/">
         <img className="login-logo"
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"   
         alt="amazon-logo" />
       </Link> 
       <div className="login-container">
         <h1>Sign in</h1> 
         <form>
           <h5>E-mail</h5>
           <input type="text" 
          //  value={email} 
          //  onChange={emailChangeHandler} 
           ref={emailRef} />

           <h5>Password</h5>
           <input type="password" 
          //  value={password} 
          //  onChange={passwordChangeHandler} 
           ref={passwordRef} />   

           <button type="submit" 
           className="login-signIn-btn"
           onClick={signIn}> 
             Sign In
           </button>
         </form>

         <p>By signing in, you agree to the terms and conditons of this Amazon clone. 
           Please use our privacy policy and I love you Nthabiseng to view our cookie options and our Internet-based ads notice. 
           </p>
           <button className="login-register-btn">Create your Amazon account</button>  
       </div>
    </div> 
  ) 
};  

export default Login;  