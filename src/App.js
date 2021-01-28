import React, { useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Cart from './Components/Pages/Cart/Cart';
import Products from './Components/Pages/Products/Products';
import Saved from './Components/Pages/Saved/Saved';
import Navbar from './Components/Nav/Navbar'
import Food from './Components/Pages/Food/Food';

function App() {
  const [cart, setCart] = useState([]);
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar cart={cart} />
        <div>
          <Route exact path="/">
            <Food loading={loading} setLoading={setLoading} food={food} setFood={setFood} cart={cart} setCart={setCart} />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route exact path="/cart">
            <Cart food={food} setFood={setFood} cart={cart} setCart={setCart} />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
