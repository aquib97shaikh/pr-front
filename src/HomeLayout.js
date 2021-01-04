import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import CreateQuestion from './CreateQuestion';
import Footer from './Footer'
import Header from './Header'
import Home from './Home';
import Pool from './Pool';
import ProfilePage from './ProfilePage';
import Question from './Question';
import Review from './Review';
import Tab from './Tab';
import UserProfile from './UserProfile';

function HomeLayout(props) {
     const username = (props.user && props.user.username) || "Let's Learn from Each other";
     const [tabView, setTabView] = useState(<Home token={props.token}/>)
     const tabHandler = (idx)=>{
         if(idx===2){
             setTabView(<Review/>);
         }
         else if(idx===1){
             setTabView(<Pool/>)
         }
         else {
             setTabView(<Home token={props.token}/>)
         }
     }
    useEffect(() => {
        setTabView(<Home token={props.token}/>)
    }, [props.token])
    return (
        <>
        <Header  logoutHandler={props.logoutHandler}/>
        <Switch>
            <Route path="/createQuestion">
                <CreateQuestion/> 
            </Route>
            <Route path="/question/:id">
                <Question />
            </Route>
            <Route path="/user/:username">
                <UserProfile user={props.user} />
            </Route>
            <Route path="/profile">
                <ProfilePage user={props.user} />
            </Route>
            <Route exact path="/">
                <Tab options={["Questions","Pool","Review"]} tabHandler={tabHandler}/>
                { tabView}
            </Route>
        </Switch>
        <Footer username={username} />
        </>
    )
}

export default HomeLayout;
