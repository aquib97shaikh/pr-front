import React, { useState } from 'react'
import LogIn from './LogIn';
import SignUp from './SignUp';
import './Auth.css';

function Auth(props) {
    const [renderSignUP, setRenderSignUP] = useState(false);
    const [error, setError] = useState(props.error)
    return (
      <div className="auth">
       <div> <button
          onClick={() => {
            setRenderSignUP(true);
            setError(null);
          }}
        >
          Sign Up
        </button>
        <button
          onClick={() => {
            setRenderSignUP(false);
            setError(null);
          }}
        >
          Log In
        </button>
        </div>
        {renderSignUP ? (
          <SignUp error={error} />
        ) : (
          <LogIn loginHandler={props.loginHandler} error={error} />
        )}
      </div>
    );
}

export default Auth;
