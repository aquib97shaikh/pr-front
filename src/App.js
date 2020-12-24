import { useState } from "react";
import "./App.css";
import Auth from "./Auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomeLayout from "./HomeLayout";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData,setUserData] = useState({});
  const loggedInHandler = (r) => {
    setLoggedIn(true);
    setUserData(r);
  }
  const logoutHandler = ()=>{

    setLoggedIn(false);
    setUserData(null);
  }
  
  return (
    <Router>
      <Switch>
        <Route path="/">
          {loggedIn ? <HomeLayout logoutHandler={logoutHandler} user={userData.user} /> : <Auth loggedInHandler={loggedInHandler} />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
