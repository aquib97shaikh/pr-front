import { useState } from "react";
import "./App.css";
import Auth from "./Auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeLayout from "./HomeLayout";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData,setUserData] = useState(null);
  const loggedInHandler = (r) => {
    setLoggedIn(true);
    setUserData(r);
    console.log(r);
  }
  
  return (
    <Router>
      <Switch>
        <Route path="/">
          {loggedIn ? <HomeLayout /> : <Auth loggedInHandler={loggedInHandler} />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
