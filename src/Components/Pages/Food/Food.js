import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Food.css';

const Food = () => {
    const [food, setFood] = useState([]);
    const [loading, setLoading] = useState(false);


    const apiURL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=612c448ae8c4498db639fc794229a5d0"

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true); //making request
            const response = await axios.get(apiURL, { headers: { Accept: "application/json" } });
            console.log(response.data);
            let userArray = [];
            userArray.push(response.data.results);
            setFood(userArray[0]);
            setLoading(false) //request received
        }
        fetchUser();
    }, [apiURL]);//run once



    return (
        <div className="container__">
            <h1>Foods Recipes</h1><br />
            {loading ? <h1>loading...</h1> : (

                <div className="food__">
                    {food.map((receipt, idx) => (
                        <div className="food__container">
                            <div className="Header">
                                {receipt.title}
                            </div>
                            <img className="img" src={receipt.image} alt={receipt.title} />
                            <div className="price__">
                                $ {Math.floor((Math.random() * 20) + 1)}
                            </div>
                            <div className="buttons__">
                                <button className="addBtn">Add to Cart</button>
                                <div className="Btn__love">
                                    &#f004
                        </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Food;
