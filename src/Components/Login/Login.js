import React, {useState, useReducer, useEffect} from "react"; 
import {Link} from "react-router-dom"; 
import "./Login.css"; 

const reducer = (state, action) => {
  if(action.type === "EMAIL-INPUT") {
    return{...state, emailValue:action.payload}; 
  }
  if(action.type === "PASS-INPUT") {
    return{...state, passwordValue:action.payload}; 
  }
  return {emailValue:"", passwordValue:""}; 
}; 

const Login = () => { 
  const [formIsValid, setFormIsValid] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    emailValue: "",
    passwordValue: ""
  });

  const { emailValue: email, passwordValue: password } = state;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("CHECKING FORM VALIDITY");
      setFormIsValid(email.includes("@") && state.password.trim().length > 6);
    }, 500);
    return () => {
      console.log("CLEANUP HERE");
      clearTimeout(identifier);
    };
  }, [email, password]);

  const emailChangeHandler = (e) => {
    dispatch({ type: "EMAIL_INPUT", payload: e.target.value });
  };

  const passwordChangeHandler = (e) => {
    dispatch({ type: "PASS_INPUT", payload: e.target.value });
  };

  const signIn = (e) => {
    e.preventDefault();
    console.log("Entered Email: ", state.emailValue);
    console.log("Entered Password: ", state.passwordValue);
  };
 
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
           value={state.emailValue} 
          onChange={emailChangeHandler} />

           <h5>Password</h5>
           <input type="password" 
           value={state.passwordValue} 
          onChange={passwordChangeHandler} />   

           <button type="submit" 
           className="login-signIn-btn"
           onClick={signIn}> 
             Sign In
           </button>
         </form>

         <p>By signing in, you agree to the terms and conditons of this Amazon clone. 
           Please use our privacy policy and I love you Nthabiseng to view our cookie options and our Internet-based ads notice. 
           </p>
           <button className="login-register-btn">
             Create your Amazon account
             </button>  
       </div>
    </div> 
  ) 
};    

export default Login;  