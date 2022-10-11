import '../App.css';
import Home from './Home'
import NavBar from './NavBar'
import Plants from './Plants';
import Articles from './Articles';
import Logout from './Logout';
import LoginPage from './LoginPage';
import NewAccount from './NewAccount';
import {Routes, Route} from 'react-router-dom';
import {useEffect} from 'react';

function App() {

  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-account" element={<NewAccount />} />
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
