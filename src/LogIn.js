import React, { useState } from 'react'
import Input from './Input';

function LogIn(props) {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const loginHandler = ()=>{
        props.loginHandler(username,pwd);
    }
    return (
      <div className="container">
        <Input
          type="text"
          label="username"
          value={username}
          onChange={(event) => setUsername(event.target.value.trim())}
        />
        <Input
          type="password"
          label="pwd"
          value={pwd}
          onChange={(event) => setPwd(event.target.value.trim())}
        />
        <button onClick={loginHandler}>Log In</button>
        <span className="error">{props.error}</span>
      </div>
    );
}

export default LogIn
