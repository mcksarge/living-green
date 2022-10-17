import '../App.css';
import Home from './Home'
import NavBar from './NavBar'
import Plants from './Plants';
import Articles from './Articles';
import LoginPage from './LoginPage';
import {Routes, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';

function App() {

  const [user, setUser] = useState(null)

  // Auto Login
  useEffect(() => {
    fetch("/me")
    .then(res => res.json())
    .then(data => setUser(data))
  }, []);
  /************************* */  

  //Handles login of user
  function handleLogin(user) {
    setUser(user)
  }
  /**************** */


  //Handles logout of user
  function handleLogout() {
    setUser(null)
  }
  /**************** */

  if(!user){
    return (
      <div className="App">
         <>
              <div id="navbar-container">
                  <h1 id="navbar-title">Living Greenery</h1>
              </div>
          </>
        <LoginPage onLogin={handleLogin} />
      </div>
    )
  } else {
return (
    <div className="App">
        <NavBar onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home user={user} />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
    </div>
  );
  }
  
}

export default App;
