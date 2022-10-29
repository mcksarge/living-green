import '../App.css';
import Home from './Home'
import NavBar from './NavBar'
import Plants from './Plants';
import Articles from './Articles';
import LoginPage from './LoginPage';
import EditAccount from './EditAccount';
import { UserContext } from './Contexts/UserContext';
import {Routes, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';

function App() {
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState([])

  // Auto Login
  useEffect(() => {
    fetch("/me")
    .then(res => {
      if (res.ok) {
        res.json().then(data => setUser(data))
      } else {
        res.json().then(errorData => setErrors(errorData.errors))
      }
    })
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
              {errors.length > 0 && (
                <ul className="errors" style={{ color: "red" }}>
                {errors.map((error) => (
                    <li key={error}>{error}</li>
                ))}
                </ul>
              )}
              <LoginPage onLogin={handleLogin} />
          </>
      </div>
    )
  } else if (user) {
  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <NavBar onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/account" element={<EditAccount />} />
        </Routes>
        </UserContext.Provider>
    </div>
  );
  }
  
}

export default App;
