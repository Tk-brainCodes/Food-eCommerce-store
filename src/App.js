
import React, { Fragment, useEffect, useState, lazy, Suspense } from 'react';
import './App.css';
import './Components/Pages/Food/Food.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Receipt from './Components/Pages/Food/Receipt.json';
import CircularProgress from '@material-ui/core/CircularProgress';
const Cart = lazy(() => import('./Components/Pages/Cart/Cart'));
const Products = lazy(() => import('./Components/Pages/Products/Products'));
const Navbar = lazy(() => import('./Components/Nav/Navbar'));
const Food = lazy(() => import('./Components/Pages/Food/Food'));
const TopNav = lazy(() => import('./Components/Top-Nav/TopNavbar'));
const HeroSection = lazy(() => import('./Components/HeroSection/Hero'));


function App() {
  const [cart, setCart] = useState([]);
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(false);


  //fetch data
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
  const renderLoader = () =>
   <div className="spinner__">
    <CircularProgress />
  </div>

  return (
    <div className="App__">
      <Suspense fallback={renderLoader()}>
        {isAuthenticated === true ? (
          <Fragment>
            <TopNav />
            <Router>
              <Navbar
                getCartQuantity={getCartQuantity}
                cart={cart}
              />
              <div className="content__container">
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
      </Suspense>
    </div>
  );
}

export default App;
