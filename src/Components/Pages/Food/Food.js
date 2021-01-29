import React, { Fragment } from 'react';
import './Food.css';

const Food = ({ addToCart, loading, food }) => {
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
                                        <div className="addBtn" onClick={() => addToCart(receipt)}>Add to Cart <i class="fas fa-shopping-cart"></i></div>
                                        <div className="Btn__love">
                                            <i><i class="far fa-bookmark"></i></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
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
