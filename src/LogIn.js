import React, { useState } from 'react'

function LogIn() {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    return (
      <div className="container">
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value.trim())}
        />
        <input
          type="password"
          onChange={(event) => console.log(event.target.value)}
        />
      </div>
    );
}

export default LogIn
