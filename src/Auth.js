import React, { useState } from 'react'
import LogIn from './LogIn';
import SignUp from './SignUp';

function Auth() {
    const [renderSignUP, setRenderSignUP] = useState(false);
    return (
        <>
    {renderSignUP ? <SignUp /> : <LogIn />}
    </>
    )
}

export default Auth;
