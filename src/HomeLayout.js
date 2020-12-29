import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import CreateQuestion from './CreateQuestion';
import Footer from './Footer'
import Header from './Header'
import Home from './Home';
import Pool from './Pool';
import Review from './Review';
import Tab from './Tab';

function HomeLayout(props) {
     const username = (props.user && props.user.username) || "Let's Learn from Each other";
     const [tabView, setTabView] = useState(<Home/>)
     const tabHandler = (idx)=>{
         if(idx===2){
             setTabView(<Review/>);
         }
         else if(idx===1){
             setTabView(<Pool/>)
         }
         else {
             setTabView(<Home/>)
         }
     }
    
    return (
        <>
        <Header  logoutHandler={props.logoutHandler}/>
        <Switch>
            <Route path="/createQuestion">
                <CreateQuestion/> 
            </Route>
            <Route exact path="/">
                <Tab options={["Questions","Pool","Review"]} tabHandler={tabHandler}/>
                {tabView}
            </Route>
        </Switch>
        <Footer username={username} />
        </>
    )
}

export default HomeLayout;
