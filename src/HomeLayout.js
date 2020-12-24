import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import Footer from './Footer'
import Header from './Header'
import Home from './Home';

function HomeLayout() {
    const [active,setActive] = useState({home:"active"});
    
    return (
        <>
        <Header {...active} />
        <Switch>
            <Route path="/contact">
                <Contact/> 
            </Route>
            <Route exact path="/">
                <Home/> 
            </Route>
        </Switch>
        <Footer />
        </>
    )
}

export default HomeLayout;
