import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cart }) => {
    return (
        <nav>
            <div className="nav__bar">
                <ul className="nav__items">
                    <li>
                        <NavLink exact className="list__link" activeClassName="active" to="/">
                            <i style={{ fontSize: "20px" }} class="fas fa-utensils"></i> <br />
                        Food
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact className="list__link" activeClassName="active" to="/saved">
                            <i style={{ fontSize: "20px" }} className="far fa-heart"></i> <br />
                        Saved
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact className="list__link" activeClassName="active" to="/cart">
                            <div className="notify__">
                                <i syle={{ fontSize: "20px",cursor: "pointer" }} class="fas fa-shopping-cart"></i>
                                <span>{cart.length}</span>
                            </div>
                            Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact className="list__link" activeClassName="active" to="/products">
                            <i style={{ fontSize: "20px" }} class="fas fa-shopping-basket"></i><br />
                        Products
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
