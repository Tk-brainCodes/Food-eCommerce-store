import React from 'react';
import './Hero.css';
import Table from './Table.svg'

const HeroSection = () => {
    return (
        <div className="hero__section">
            <div className="hero__text">
                <div className="hero__textarea">
                    <p className="dicover__dishes">Discover your favourite <i id="dish">Food Dish</i></p>
                    <p className="text">Discover more than <b id="bold">50+</b> food dish,receipts and snacks both <b id="bold_text">local</b> and <b id="bold_text">continental</b> . <br />
                            Order and check out payment with no stress.Your food is on its way!
                            </p>
                            <img src={Table} alt="tableimage" className="image__table"/>
                </div>
            </div>
            <div className="image__conitainer">
            </div>
        </div>
    )
}

export default HeroSection;
