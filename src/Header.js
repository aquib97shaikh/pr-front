import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./HeadAndFoot.css"
function Header(props) {
    const [prop,setProp] = useState({home:"active"});
    return (
      <div className="header">
        <Link className="logo" to="/">Lets Learn</Link>
        <div className="header-right">
          <Link className={prop.home || ""} to="/" onClick={()=>setProp({home:"active"})}>
            Home
          </Link>
          <Link className={prop.contact || ""} to="/contact" onClick={()=>setProp({contact:"active"})}>Contact</Link >
          <Link  to="" style={{border:"1px solid red"}}onClick={props.logoutHandler}>Logout</Link >
        </div>
      </div>
    );
}

export default Header
