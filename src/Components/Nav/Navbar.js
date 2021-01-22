import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="nav__bar">
                <ul className="nav__items">
                    <li>
                        <NavLink exact className="list__link" activeClassName="active" to="/">Food</NavLink>
                    </li>
                    <li>
                        <NavLink exact className="list__link" activeClassName="active" to="/saved">Saved</NavLink>
                    </li>
                    <li>
                        <NavLink  exact className="list__link" activeClassName="active" to="/cart">Cart</NavLink>
                    </li>
                    <li>
                        <NavLink exact className="list__link" activeClassName="active" to="/products">Products</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
