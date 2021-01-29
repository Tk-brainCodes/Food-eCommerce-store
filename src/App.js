
import React, { useEffect, useState } from 'react';
import './App.css';
import './Components/Pages/Food/Food.css';
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import Cart from './Components/Pages/Cart/Cart';
import Products from './Components/Pages/Products/Products';
import Saved from './Components/Pages/Saved/Saved';
import Navbar from './Components/Nav/Navbar'
import Food from './Components/Pages/Food/Food';
import Receipt from './Components/Pages/Food/Receipt.json';

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

    const addedToCart = JSON.parse(localStorage.getItem('added-to-cart'));
    if (addedToCart) {
      setCart(addedToCart);
    }
  }, []);


  const saveToLocalStorage = (items) => {
    localStorage.setItem('added-to-cart', JSON.stringify(items));
  }

  //Add to cart
  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.title === item.title);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1
      }
      newCart.push(itemInCart);
    }
    // const cartAdded = [...cart, { ...food }];
    setCart(newCart);
    saveToLocalStorage(newCart);
  }

  //total cart quantity
  const getCartQuantity = () => {
    let reduceQuantity = cart.reduce((sum, { quantity }) => sum + quantity, 0)
    return reduceQuantity
  }


  return (
    <div className="App__">
      <Router>
        <Navbar
          getCartQuantity={getCartQuantity}
          cart={cart}
        />
        <div>
          <Route exact path="/">
            <Food
              addToCart={addToCart}
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
    </div>
  );
}

export default App;
