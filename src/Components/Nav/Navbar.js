import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ getCartQuantity }) => {
    return (
        <Fragment>
            <nav>
                <div className="nav__bar">
                    <ul className="nav__items">
                        <li>
                            <NavLink exact className="list__link" activeClassName="active" to="/">
                                <i style={{ fontSize: "20px", marginTop: "10px" }} class="fas fa-utensils"></i> <br />
                   food
                   </NavLink>
                        </li>
                        <li>
                            <NavLink exact className="list__link" activeClassName="active" to="/saved">
                                <i style={{ fontSize: "20px" }} class="fas fa-bookmark"></i> <br />
                   Saved
                   </NavLink>
                        </li>
                        <li>
                            <NavLink exact className="list__link" activeClassName="active" to="/cart">
                                <div className="notify__">
                                    <i syle={{ fontSize: "20px", cursor: "pointer" }} class="fas fa-shopping-cart"></i>
                                    <span>{getCartQuantity()}</span>
                                </div>
                       Cart
                   </NavLink>
                        </li>
                        <li>
                            <NavLink exact className="list__link" activeClassName="active" to="/products">
                                <i style={{ fontSize: "20px" }} class="fas fa-shopping-basket"></i><br />
                   Menu
                   </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="discover__more">
            </div>
        </Fragment>
    )
}

export default Navbar;
