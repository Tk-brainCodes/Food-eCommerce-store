import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        <div>
            <h1>Foods</h1>

            <div className="food__">
                {food.map((receipt, idx) => (
                    <div>
                        {receipt.title}
                        <img src={receipt.image} alt={receipt.title} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Food;

// <input
// className='form-control'
// value={query}
// onChange={(event) => setQuery(event.target.value)}
// placeholder='Type to search...'
// />