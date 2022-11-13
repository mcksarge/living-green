import '../App.css';
import Home from './Home'
import NavBar from './NavBar'
import Plants from './Plants';
import Articles from './Articles';
import LoginPage from './LoginPage';
import EditAccount from './EditAccount';
import {Routes, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState([])
  
  const dispatch = useDispatch()

  // Auto Login
  useEffect(() => {
    fetch("/me")
    .then(res => {
      if (res.ok) {
        res.json().then(data => {
          dispatch({type: "login", payload: data})
          setUser(data)
        })
      } else {
        res.json().then(errorData => setErrors(errorData.errors))
      }
    })
  }, []);
  /************************* */  

  //Handles login of user
  function handleLogin(user) {
    console.log(user)
    dispatch({type: "login", payload: user})
  }
  /**************** */

  //Handles logout of user
  function handleLogout() {
    dispatch({type: "logout"})
    setUser(null)
  }
  /**************** */


  // Edit User
  function handleEdit(user){
    setUser(user)
  }
  /******** */

  if(!user){
    return (
      <div className="App">
         <>
              <div id="navbar-container">
                  <h1 id="navbar-title">Living Greenery</h1>
              </div>
              <h2>Welcome to Living Greenery!</h2>
              <LoginPage onLogin={handleLogin} />
          </>
      </div>
    )
  } else if (user) {
  return (
    <div className="App">
        <NavBar onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/account" element={<EditAccount onEdit={handleEdit} />} />
        </Routes>
    </div>
  );
  }
  
}

export default App;
