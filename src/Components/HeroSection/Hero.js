import React from 'react';
import './Hero.css';

const HeroSection = () => {
    return (
        <div className="hero__section">
            <div className="hero__text">
                <div className="hero__textarea">
                    <p className="dicover__dishes">Discover your favourite <i id="dish">Food</i></p>
                    <p className="text">Discover more than <b id="bold">100+</b> food dish,receipts and snacks both <b id="bold_text">local</b> and <b id="bold_text">continental</b> . <br />
                  Order and check out payment with no stress.Your food is on its way!
                 </p>
                </div>
            </div>
            <div className="hero__image">

            </div>
        </div>
    )
}

export default HeroSection;
