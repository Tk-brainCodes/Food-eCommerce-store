import React, { useEffect, Fragment } from 'react';
import Receipt from './Receipt.json';
import './Food.css';

const Food = ({ loading, setLoading, food, setFood, cart, setCart }) => {

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true); //making request
            let userArray = [];
            userArray.push(Receipt.results);
            setFood(userArray[0]);
            setLoading(false) //request received
        }
        fetchUser();
    });//run once

    //Add to cart
    const addToCart = (food) => {
        setCart([...cart, {...food}]);
    }

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
                        <h1 className="food__heading">Foods Recipes  <i className="fas fa-utensils"></i></h1><br />
                        <div className="food__">
                            {food.map((receipt, idx) => (
                                <div className="food__container" key={idx}>
                                    <div className="Header">
                                        {receipt.title}
                                    </div>
                                    <img className="img" src={receipt.image} alt={receipt.title} />
                                    <div className="price__">
                                        $ {receipt.price}
                                    </div>
                                    <div className="buttons__">
                                        <button className="addBtn" onClick={() => addToCart(receipt)}>Add to Cart <i class="fas fa-shopping-cart"></i></button>
                                        <div className="Btn__love">
                                            <i><i className="far fa-heart"></i></i>
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

export default Food;
