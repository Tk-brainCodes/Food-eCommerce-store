import React, { Fragment, useState } from 'react'

const Saved = ({ save, setSave }) => {
    

    return (
        <div className="cart__component">
            {save.length === 0 ? (
                <Fragment>
                    <div className="empty">
                        <i className="fab fa-opencart"></i><br />
                        <h1 className="cart__heading">there is no save food</h1>
                    </div>
                </Fragment>
            ) : (
                    <>
                        <h1 className="food__heading">Saved Food<i className="fas fa-utensils"></i></h1><br />
                        <div className="clear_the_cart">
                            {/*cart.length > 0 && (<div id="clear__Btn" onClick={clearCart}>Clear Cart</div>)*/}
                        </div>
                        <Fragment>
                            <div className="food__">
                                {save.map((receipt, idx) => (
                                    <div className="food__container" key={idx}>
                                        <div className="Header">
                                            {receipt.title}
                                        </div>
                                        <img className="img" src={receipt.image} alt={receipt.title} />
                                        <div className="price__">
                                            ${receipt.price}
                                            {receipt.quantity}
                                        </div>
                                        <div className="buttons__">
                                            <div className="remove">
                                             UNSAVE
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Fragment>
                    </>
                )}
        </div>
    )
}

export default Saved;
