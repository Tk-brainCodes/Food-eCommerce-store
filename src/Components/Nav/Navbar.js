import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav__bar">
            <div className="container__">
                <Link to="/">View Cart</Link>
            </div>
            <div className="nav__collapse">
                <ul>
                    <li className="nav__item active">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="nav__item">
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
