import React, { Fragment } from 'react';
import '../Food/Food.css';

const Cart = ({ cart, setCart }) => {

    const removeFromCart = (receiptToRemove) => {
        setCart(
            cart.filter((receipt) => receipt !== receiptToRemove)
        );
    };

    return (
        <div className="cart__component">
            <Fragment>
                <h1>Your Cart  <i className="fas fa-utensils"></i></h1><br />
                <div className="food__">
                    {cart.map((receipt, idx) => (
                        <div className="food__container" key={idx}>
                            <div className="Header">
                                {receipt.title}
                            </div>
                            <img className="img" src={receipt.image} alt={receipt.title} />
                            <div className="price__">
                                $ {Math.floor((Math.random() * 20) + 1)}
                            </div>
                            <div className="buttons__">
                                <button className="addBtn" onClick={() => removeFromCart(receipt)}>Remove From Cart <i class="fas fa-shopping-cart"></i></button>
                                <div className="Btn__love">
                                    <i><i className="far fa-heart"></i></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Fragment>
        </div>
    )
}

export default Cart;
