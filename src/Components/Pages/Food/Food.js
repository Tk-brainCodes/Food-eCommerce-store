import React, { useState, useEffect, Fragment } from 'react';
import AbortController from "abort-controller"
import axios from 'axios';
import './Food.css';

const Food = ({ cart, setCart }) => {
    const [food, setFood] = useState([]);
    const [loading, setLoading] = useState(false);


    const apiURL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=612c448ae8c4498db639fc794229a5d0"

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchUser = async () => {
            setLoading(true); //making request
            const response = await axios.get(apiURL, { signal: signal });
            console.log(response.data);
            let userArray = [];
            userArray.push(response.data.results);
            setFood(userArray[0]);
            setLoading(false) //request received
        }
        fetchUser();

        //clean up effect
        return function cleanup() {
            abortController.abort();
        }
    }, [apiURL]);//run once

    //Add to cart
    const addToCart = (food) => {
        let newCart = [...cart];
        let itemInCart = newCart.find((item) => food.name === item.name);
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
                ...food,
                quantity: 1,
            };
            newCart.push(itemInCart);
        }
        setCart(newCart);
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
                        <h1>Foods Recipes  <i className="fas fa-utensils"></i></h1><br />
                        <div className="food__">
                            {food.map((receipt, idx) => (
                                <div className="food__container" key={idx}>
                                    <div className="Header">
                                        {receipt.title}
                                    </div>
                                    <img className="img" src={receipt.image} alt={receipt.title} />
                                    <div className="price__">
                                        $ {Math.floor((Math.random() * 20) + 1)}
                                    </div>
                                    <div className="buttons__">
                                        <button className="addBtn" onClick={() => addToCart(food)}>Add to Cart <i class="fas fa-shopping-cart"></i></button>
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
