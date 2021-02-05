import React, { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Food.css';
import Snackbar from '@material-ui/core/Snackbar';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


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
     } catch(error){
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
        <div className="container__">
            {loading ?
                <div className="loading">
                    <h1>loading...
                <br />
                        <i className="fas fa-hotdog"></i></h1>
                </div>
                : (
                    <Fragment>
                        <h1 className="food__heading"><b>Hungry?</b> <br /> order and eat  : ) <i className="fas fa-utensils"></i></h1><br />
                        <ScrollAnimation animatePreScroll={true} className="food__ animate__fadeIn" animateIn="fadeIn">
                            {food.filter((receipt) => receipt.image).map((receipt, idx) => (
                                <div className="food__container" key={idx}>
                                    <ScrollAnimation className="animate__fadeInUp" animateIn="fadeInUp">
                                        <div className="Header">
                                            {receipt.title}
                                        </div>
                                        <img className="img" src={receipt.image} alt={receipt.title} />
                                        <div className="price__">
                                            $ {receipt.price}
                                        </div><br /><br />
                                        <h5><i className="fas fa-map-marker-alt"></i> {receipt.restaurantChain}</h5><br />
                                        <div className="buttons__">
                                            <div className="addBtn" onClick={() => addToCart(receipt)}>
                                                Add to Cart <i className="fas fa-shopping-cart"></i>
                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            ))}
                        </ScrollAnimation>
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

                )}
        </div>
    )
}

export default Food;
