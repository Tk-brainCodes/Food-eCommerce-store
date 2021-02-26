import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Food.css';
import Snackbar from '@material-ui/core/Snackbar';
import Delivery from '../../Delivery/Delivery';


const Food = (
    { loading,
        food,
        cart,
        setCart,
    }) => {

        const [open, setOpen] = useState(false);

        //local storage
        useEffect(() => {
          try {
            const addedToCart = JSON.parse(localStorage.getItem('added-to-cart'));
            if (addedToCart) {
              setCart(addedToCart);
            }
          } catch (error) {
            console.log(error)
          }
      
        }, [setCart])
      
        const saveToLocalStorage = (items) => {
          localStorage.setItem('added-to-cart', JSON.stringify(items));
        }
      
      
      
        //Add to cart
        const addToCart = (product) => {
          let newCart = [...cart];
          let itemInCart = newCart.find((item) => product.title === item.title);
          //if item is in cart
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
          //opn snackbar
          setOpen(true);
        }
      

    //close snackbar
    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <Fragment>
            <Delivery /><br /><br />
            <h1 className="food__heading"><b>Hungry?</b> <br /> order and eat  : ) <i className="fas fa-utensils"></i></h1>
            <div className="container__">
                <Fragment>
                    <div className="food__ " >
                        {food.filter((receipt) => receipt.image).map((receipt, idx) => (
                            <div className="food__container" key={idx}>
                                <img className="img" src={receipt.image} alt={receipt.title} />
                                <div className="Header">
                                    {receipt.title}
                                </div>
                                <div className="price__">
                                    $ {receipt.price}
                                </div>
                                <h5><i className="fas fa-map-marker-alt"></i> {receipt.restaurantChain}</h5><br />
                                <div className="buttons__">
                                    <div className="addBtn" onClick={() => addToCart(receipt)}>
                                        Add to Cart <i className="fas fa-shopping-cart"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/*Snackbar*/}
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={open}
                        severity="success"
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="ADDED TO CART"
                        action={
                            <Fragment>
                                <button severity="success" className="close_btn" aria-label="close" onClick={handleClose}>
                                    <i className="fas fa-times"></i>
                                </button>
                            </Fragment>
                        }
                    />
                    <NavLink exact to="/products">
                        <button className="discover__Btn">Discover More :)</button>
                    </NavLink>
                </Fragment>
            </div>
        </Fragment>
    )
}

export default Food;
