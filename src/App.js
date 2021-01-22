
import './App.css';
import { BrowserRouter as Switch, Route, Router } from 'react-router-dom';
import Navabar from './Components/Nav/Navbar';
import Navbar from './Components/Nav/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
