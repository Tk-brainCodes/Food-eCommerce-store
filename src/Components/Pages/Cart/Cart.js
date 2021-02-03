import React, { Fragment, useEffect, useState } from 'react';
import BackBtn from '../BackButton/BackBtn';
import { NavLink } from 'react-router-dom';
import '../Food/Food.css';
import Modal from 'react-modal';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";




const Cart = ({ cart, setCart }) => {

    //bind modal to app element
    Modal.setAppElement(document.getElementById('root'));

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


    /*MODAL CODE*/
    const [modalIsOpen, setIsOpen] = useState(false);

    //open modal
    const openModal = () => {
        setIsOpen(true);
    }

    //close modal
    const closeModal = () => {
        setIsOpen(false);
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
                            Your Cart  <i className="fas fa-utensils"></i></h1><br />
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
                            <h3 className="total__cost">Total: <b className="bold">${getTotalSum()} <i class="fas fa-money-check-alt"></i></b></h3><br />
                            <div className="check__out" onClick={openModal}>
                                <div className="checkOut__Btn">Check Out <i class="fas fa-money-check"></i></div>
                            </div>
                            <ScrollAnimation className="animate__bounceIn" animateIn="bounceIn">
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    contentLabel="Checkout Modal"
                                    style={{
                                        overlay: {
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundColor: 'rgba(0,0,0,0.8)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        },
                                        content: {
                                            position: 'absolute',
                                            background: '#162131',
                                            overflow: 'hidden',
                                            padding: "10px",
                                            WebkitOverflowScrolling: 'touch',
                                            outline: 'none',
                                            width: '90vw',
                                            height: '90vh',
                                            animate: "bounceIn",
                                            

                                        }
                                    }}
                                    className="modal__box"
                                >
                                    <button
                                        className="close__modal"
                                        onClick={closeModal}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                    
                                </Modal>
                            </ScrollAnimation>
                        </Fragment>
                    </>
                )}
        </div>
    )
}

export default Cart;
