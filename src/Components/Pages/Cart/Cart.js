import React, { Fragment, useEffect } from 'react';
import '../Food/Food.css';

const Cart = ({ cart, setCart }) => {

    //save to localStorage
    useEffect(() => {
        const addedToCart = JSON.parse(localStorage.getItem('added-to-cart'));
        if (addedToCart) {
            setCart(addedToCart);
        }
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('added-to-cart', JSON.stringify(items));
    }

    //remove from cart
    const removeFromCart = (receiptToRemove) => {
        const removeItem = cart.filter((receipt) => receipt !== receiptToRemove);
        setCart(removeItem);
        saveToLocalStorage(removeItem);
    };

    //get cart total cost
    const getTotalSum = () => {
        const sumCart = cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0)
        return sumCart.toFixed(2);
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
            {cart.length === 0 ? (
                <Fragment>
                    <div className="empty">
                        <i className="fab fa-opencart"></i><br />
                        <h1 className="cart__heading">Your cart is empty</h1>
                    </div>
                </Fragment>
            ) : (
                    <>
                        <h1 className="food__heading">Your Cart  <i className="fas fa-utensils"></i></h1><br />
                        <h3 className="total__cost">Total: <b className="bold">${getTotalSum()} <i class="fas fa-money-check-alt"></i></b></h3>
                        <div className="clear_the_cart">
                            {cart.length > 0 && (<div id="clear__Btn" onClick={clearCart}>Clear Cart</div>)}
                        </div>
                        <Fragment>
                            <div className="food__">
                                {cart.map((receipt, idx) => (
                                    <div className="food__container" key={idx}>
                                        <div className="Header">
                                            {receipt.title}
                                        </div>
                                        <img className="img" src={receipt.image} alt={receipt.title} />
                                        <div className="price__">
                                            ${receipt.price}
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
                            <div className="check__out">
                                <div className="checkOut__Btn">Check Out <i class="fas fa-money-check"></i></div>
                            </div>
                        </Fragment>
                    </>
                )}
        </div>
    )
}

export default Cart;
