import { useState } from 'react';
import './App.css';
import Home from './Home';
import Auth from './Auth';

function App() {
  const [loggedIn,setLoggedIn] = useState(false);

  return (
   loggedIn ? <Home /> : <Auth />
  );
}

export default App;
