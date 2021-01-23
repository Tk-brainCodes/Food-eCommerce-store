import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cart }) => {
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
                        <NavLink exact className="list__link" activeClassName="active" to="/cart">
                            <i class="fas fa-shopping-cart"></i>
                            <i className="length">
                                {cart.length}
                            </i>
                        </NavLink>
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
