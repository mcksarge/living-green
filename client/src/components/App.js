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
              <h2>Welcome to Living Greenery!</h2>
              <p>A conjunction of useful tips and information on various plants. Living Greenery is a place where plant enthusiasts (new or old) can learn how to care for specific plants they may have or plan to get.</p>
              <br></br>
              <p><strong>What can I do here?</strong></p>
              <div id="home-summary">
                  <ul>
                      <li>View the plants catalog!</li>
                      <li>Find information on plants you find, such as watering needs and sunlight recommendations!</li>
                      <li>Add new plants to the catalog if you don't find one you see there!</li>
                      <li>Add plants to your own list, and easily access them from the home page!</li>
                      <li>View and create articles for all members to enjoy!</li>
                  </ul>
              </div>
              <LoginPage onLogin={handleLogin} />
          </>
      </div>
    )
  } else {
return (
    <div className="App">
        <NavBar onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/home" element={<Home user={user} />} />
          <Route path="/plants" element={<Plants user={user} />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
    </div>
  );
  }
  
}

export default App;
