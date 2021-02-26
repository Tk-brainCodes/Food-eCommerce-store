import React, { Fragment, useEffect } from 'react';
import BackBtn from '../BackButton/BackBtn';
import { NavLink } from 'react-router-dom';
import '../Food/Food.css';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Cart = ({ cart, setCart }) => {

    //get cart total cost
    const getTotalSum = () => {
        const sumCart = cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0)
        return sumCart.toFixed(2);
    };

    let sum = getTotalSum() * 100;
    let length = cart.length;

    //stripe checkout code
    const handleToken = async (token) => {
        const response = await axios.post("https://pacific-inlet-13182.herokuapp.com//checkout", {
            token,
            cart,
            sum,
            length
        });
        const { status } = response.data;
        if (status === "success") {
            toast(`Success! Payment received for ${cart.length} items`, {
                type: 'success'
            });
        } else {
            toast("Something went wrong", {
                type: "error"
            });
        }

    }


    //save to localStorage
    useEffect(() => {
        const addedToCart = JSON.parse(localStorage.getItem('added-to-cart'));
        if (addedToCart) {
            setCart(addedToCart);
        }
    }, [setCart]);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('added-to-cart', JSON.stringify(items));
    }

    //remove from cart
    const removeFromCart = (receiptToRemove) => {
        const removeItem = cart.filter((receipt) => receipt !== receiptToRemove);
        setCart(removeItem);
        saveToLocalStorage(removeItem);
    };

    //clear cart
    const clearCart = () => {
        let cartLength = [];
        setCart(cartLength);
        saveToLocalStorage(cartLength);
    }

    //increment quantity 
    const setQuantity = (food, amount) => {
        const newCart = [...cart];
        newCart.find(item => item.title === food.title).quantity = amount;
        setCart(newCart);
        saveToLocalStorage(newCart);
    }

    return (
        <div className="cart__component">
            <NavLink exact to="/">
                <BackBtn />
            </NavLink>
            {cart.length === 0 ? (
                <Fragment>
                    <div className="empty">
                        <i className="fab fa-opencart"></i><br />
                        <h1 className="cart__heading">Your cart is empty</h1>
                    </div>
                </Fragment>
            ) : (
                    <>
                        <h1 className="food__heading">
                            Your Cart  <i className="fas fa-utensils"></i>
                            </h1><br />
                        <div className="clear_the_cart">
                            {cart.length > 0 && (<div id="clear__Btn" onClick={clearCart}>Clear Cart <i className="far fa-trash-alt"></i></div>)}
                        </div>
                        <Fragment className="sub__cart">
                                <div className="food__">
                                    {cart.map((receipt, idx) => (
                                        <div className="food__container" key={idx}>
                                            <img className="img" src={receipt.image} alt={receipt.title} />
                                            <div className="price__">
                                                ${receipt.price}
                                            </div>
                                            <div className="Header">
                                            {receipt.title}
                                        </div>
                                            <h5>Quantity</h5>
                                            <div className="quantity">
                                                <h4 className="quantity__">
                                                    <input
                                                        type="text"
                                                        htmlFor="input"
                                                        className="input__text"
                                                        value={receipt.quantity}
                                                        onChange={(e) =>
                                                            setQuantity(receipt, e.target.value > 0 ? parseInt(e.target.value) : 0)}
                                                        placeholder="Enter quantity"
                                                    />
                                                </h4>
                                            </div>
                                            <div className="buttons__">
                                                <div className="Btn__love">
                                                    <i id="icon__trash" onClick={() => removeFromCart(receipt)}><i className="far fa-trash-alt"></i></i>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            <h3 className="total__cost">Total: <b className="bold">${getTotalSum()} <i className="fas fa-money-check-alt"></i></b></h3><br />
                                <StripeCheckout
                                    stripeKey="pk_test_51IGZ6EJWDBULoxk2muGXqz9RpyZtR6zmQdyb9QN4CJZNlXAFt6yaIponKddgxgnDveYTY3ISb2V1UR177txFJj1i00K0jBKRWQ"
                                    token={handleToken}
                                    billingAddress
                                    shippingAddress
                                    ComponentClass="div"
                                    amount={sum}
                                    name={`Purchase ${cart.length} Products In Cart`}
                                >
                                    <div className="check__out">
                                        <div className="checkOut__Btn">Check Out <i className="fas fa-money-check"></i></div>
                                    </div>

                                </StripeCheckout>
                        </Fragment>
                    </>
                )}
        </div>
    )
}

export default Cart;
