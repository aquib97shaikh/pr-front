import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Auth from "./Auth";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData,setUserData] = useState(null);
  const [error,setError] = useState(null);
  const loginHandler = async (username, pwd) => {
    authHandler("http://localhost:9999/login",JSON.stringify({username,pwd}));
  };
  const signupHandler = async (userObj) =>{
    const {fname,lname,username,email,pwd} = userObj;
    authHandler("http://localhost:9999/signup",JSON.stringify({fname,lname,username,email,pwd}));

  }
  const isNoU = val => val===null || val === undefined;
  const authHandler = async (url,body) =>{
    console.log("auth");
    fetch(url,{
      method:"POST",
      body:body,
      headers:{
        "Content-Type":"application/json"
      }
    }).then(r=>{
      if(r.ok){
        setLoggedIn(true);
        
      }
      return r.json();
    }).then(r=>{
      isNoU(r.er) ? setUserData(r) : setError(r.er);
    })
  }
  return loggedIn ? <Home /> : <Auth loginHandler={loginHandler} signupHandler ={signupHandler} error={error}/>;
}

export default App;
