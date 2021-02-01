
import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import './Components/Pages/Food/Food.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Cart from './Components/Pages/Cart/Cart';
import Products from './Components/Pages/Products/Products';
import Saved from './Components/Pages/Saved/Saved';
import Navbar from './Components/Nav/Navbar'
import Food from './Components/Pages/Food/Food';
import Receipt from './Components/Pages/Food/Receipt.json';
import TopNav from './Components/Top-Nav/TopNavbar';
import HeroSection from './Components/HeroSection/Hero';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const [cart, setCart] = useState([]);
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const fetchUser = async (d) => {
      setLoading(true); //making request
      let userArray = [];
      userArray.push(Receipt.results);
      setFood(userArray[0]);
      setLoading(false) //request received
    }
    fetchUser();
  }, []);




  //total cart quantity
  const getCartQuantity = () => {
    let reduceQuantity = cart.reduce((sum, { quantity }) => sum + quantity, 0)
    return reduceQuantity
  }

  const { isAuthenticated } = useAuth0();


  return (
    <div className="App__">
      {isAuthenticated === true ? (
        <Fragment>
          <TopNav />
          <Router>
            <Navbar
              getCartQuantity={getCartQuantity}
              cart={cart}
            />
            <div>
              <Route exact path="/">
                <Food
                  loading={loading}
                  setLoading={setLoading}
                  food={food}
                  setFood={setFood}
                  cart={cart}
                  setCart={setCart}
                />
              </Route>
              <Route exact path="/saved">
                <Saved />
              </Route>
              <Route exact path="/cart">
                <Cart
                  food={food}
                  setFood={setFood}
                  cart={cart}
                  setCart={setCart} />
              </Route>
              <Route exact path="/products">
                <Products />
              </Route>
            </div>
          </Router>
        </Fragment>
      ) : (
          <Fragment>
            <TopNav />
            <HeroSection />
          </Fragment>
        )}

    </div>
  );
}

export default App;
