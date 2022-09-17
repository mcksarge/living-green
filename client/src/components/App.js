import '../App.css';
import Home from './Home.js'
import NavBar from './NavBar.js'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Home />
    </div>
  );
}

export default App;
