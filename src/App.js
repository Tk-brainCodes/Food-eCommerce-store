
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Cart from './Components/Pages/Cart/Cart';
import Products from './Components/Pages/Products/Products';
import Saved from './Components/Pages/Saved/Saved';
import Navbar from './Components/Nav/Navbar'
import Food from './Components/Pages/Food/Food';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Route exact path="/" component={Food} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/products" component={Products} />
        </div>
      </Router>
    </div>
  );
}

export default App;
