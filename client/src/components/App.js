import '../App.css';
import Home from './Home'
import NavBar from './NavBar'
import Plants from './Plants';
import Articles from './Articles';
import Logout from './Logout';
import LoginPage from './LoginPage';
import {Routes, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';

function App() {

  const [user, setUser] = useState(null)

  // Auto Login
  useEffect(() => {
    
    fetch('/me').then((res) => {
      if(res.ok){
        res.json().then((data) => setUser(data));
      }
    });

  }, [])
  /************************* */  

  //Handles login of user
  function handleLogin(user) {
    setUser(user)
  }
  /**************** */
  if(!user) return (
    <div className="App">
       <>
            <div id="navbar-container">
                <h1 id="navbar-title">Living Greenery</h1>
            </div>
        </>
      <LoginPage onLogin={setUser} />
    </div>
  )
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
    </div>
  );
}

export default App;
