import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import Footer from './Footer'
import Header from './Header'
import Home from './Home';

function HomeLayout(props) {
     const username = (props.user && props.user.username) || "Let's Learn from Each other";
    
    return (
        <>
        <Header  logoutHandler={props.logoutHandler}/>
        <Switch>
            <Route path="/createQuestion">
                <Contact/> 
            </Route>
            <Route exact path="/">
                <Home/> 
            </Route>
        </Switch>
        <Footer username={username} />
        </>
    )
}

export default HomeLayout;
