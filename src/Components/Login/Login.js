import React, { useState, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; 

const reducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return { ...state, emailValue: action.payload };
  }
  if (action.type === "PASS_INPUT") {
    return { ...state, passwordValue: action.payload };
  }
  return { emailValue: "", passwordValue: "" };
};

const Login = ({ onLogin }) => { 
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

  const emailChangeHandler = (event) => {
    dispatch({ type: "EMAIL_INPUT", payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatch({ type: "PASS_INPUT", payload: event.target.value });
  };

  const signIn = (event) => {
    event.preventDefault(); 
    console.log("Entered Email: ", state.emailValue);
    console.log("Entered Password: ", state.passwordValue);
    onLogin(state.emailValue, state.passwordValue);   
  }; 

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={state.emailValue}
            onChange={emailChangeHandler}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={state.passwordValue}
            onChange={passwordChangeHandler}
          />
          <button type="submit" className="login_signInButton" onClick={signIn}> 
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button type="submit" className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;  