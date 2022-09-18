import '../App.css';
import Home from './Home.js'
import NavBar from './NavBar.js'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
