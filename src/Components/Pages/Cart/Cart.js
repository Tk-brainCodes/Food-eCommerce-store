import React, { Fragment } from 'react';
import '../Food/Food.css';

const Cart = ({ cart, setCart }) => {

    //save to localStorage

    const removeFromCart = (receiptToRemove) => {
        setCart(
            cart.filter((receipt) => receipt !== receiptToRemove)
        );
    };

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
                    <Fragment className="fragment__">
                    <h1 className="food__heading">Your Cart  <i className="fas fa-utensils"></i></h1><br />
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
                                    <div className="buttons__">
                                        <button className="addBtn">order <i class="fas fa-shopping-cart"></i></button>
                                        <div className="Btn__love">
                                            <i id="icon__trash" onClick={() => removeFromCart(receipt)}><i class="far fa-trash-alt"></i></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Fragment>

                )}
        </div>
    )
}

export default Cart;
