import '../App.css';
import Home from './Home'
import NavBar from './NavBar'
import Plants from './Plants';
import Articles from './Articles';
import Logout from './Logout';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
    </div>
  );
}

export default App;
