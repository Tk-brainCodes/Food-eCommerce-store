import React, { useState } from 'react';
import axios from 'axios';
import './Product.css';

const Products = () => {
    const [searchedFood, setSearchedFood] = useState([]);
    const [query, setQuery] = useState('');
    

    // //local storage
    // useEffect(() => {
    //     try {
    //         const addedToCart = JSON.parse(localStorage.getItem('added-to-cart'));
    //         if (addedToCart) {
    //             setSearchedFood(addedToCart);
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }, [setSearchedFood])

    // const saveToLocalStorage = (items) => {
    //     localStorage.setItem('added-to-cart', JSON.stringify(items));
    // }

    const getFoodRequest = async (e) => {
        e.preventDefault();
        const api = `https://api.spoonacular.com/food/menuItems/search?query=${query}&number=10&apiKey=612c448ae8c4498db639fc794229a5d0`;

        try {

            const response = await axios.get(api, { headers: { Accept: "application/json" } });
            const data = response.data.menuItems;
            setSearchedFood(data);

        } catch (error) {
            console.log(error);
        }
    }

    let price = parseInt(Math.floor(Math.random() * 10) + 1);

    return (
        <div>
            <h1>Products</h1>

            {/* search bar */}
            <form className="form__search" onSubmit={getFoodRequest}>
                <input
                    type="search"
                    placeholder="Search food..."
                    className="form-control"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="submit__btn" type="submit">Search</button>
            </form>


            {/* searched component*/}
            {searchedFood.length === 0 ?
                (
                    <div className="searched">No Food item searched...</div>
                )
                :
                (
                    <div className="movie__container">
                        {searchedFood.filter((receipt) => receipt.image).map((seFood, idx) => (
                            <div className="card__food" key={idx}>
                                <p className="p__one">
                                    <img type={seFood.imageType} src={seFood.image} alt={seFood.title} width="200px" height="200px" id="img" />
                                </p>
                                <p className="p__price">
                                    {seFood.title}
                                </p>
                                <p className="p__three">
                                    <i className="fas fa-map-marker-alt"></i>   {seFood.restaurantChain}
                                </p>
                            </div>
                        ))}
                    </div>

                )}
        </div>
    )
}

export default Products;
