import React, { Fragment, useEffect, useState } from 'react';
import './Food.css';
import Snackbar from '@material-ui/core/Snackbar';

const Food = ({ loading, food, cart, setCart }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const addedToCart = JSON.parse(localStorage.getItem('added-to-cart'));
        if (addedToCart) {
            setCart(addedToCart);
        }
    }, [])

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
        //opn snackbar
        setOpen(true);
        saveToLocalStorage(newCart);
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
                        <h1 className="food__heading"><b>Hungry?</b> <br /> <text>order and eat  : )</text>  <i className="fas fa-utensils"></i></h1><br />
                        <div className="food__">
                            {food.filter((receipt) => receipt.image).map((receipt, idx) => (
                                <div className="food__container" key={idx}>
                                    <div className="Header">
                                        {receipt.title}
                                    </div>
                                    <img className="img" src={receipt.image} alt={receipt.title} />
                                    <div className="price__">
                                        $ {receipt.price}
                                    </div><br /><br />
                                    <h5><i class="fas fa-map-marker-alt"></i> {receipt.restaurantChain}</h5><br />
                                    <div className="buttons__">
                                        <div className="addBtn" onClick={() => addToCart(receipt)}>
                                            Add to Cart <i class="fas fa-shopping-cart"></i></div>
                                        <div className="Btn__love">
                                            <i><i class="far fa-bookmark"></i></i>
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

                        <div className="discover__more">
                            <button className="discover__Btn">
                                Discover More :)
                            </button>
                        </div>



                    </Fragment>

                )}
        </div>
    )
}

export default Food;
