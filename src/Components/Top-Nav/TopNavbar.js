import React from 'react';
import Login from '../LogIn/Login';
import Logout from '../Logout/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Topnav.css';


const TopNavbar = () => {
    const { isAuthenticated } = useAuth0();
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <div className="spinner__"><CircularProgress className="spinning__icon" /></div>

    }
    return (
        <div className="top__nav">
            <div className="navigate__top">
                <div className="welcome">
                    <p className="p__welcome"> Foodie <p className="order">order</p></p>
                </div>

                <div className="isAuthenticated__">
                    {isAuthenticated ? <Logout /> : <Login />}
                </div>
            </div>
        </div>
    )
}

export default TopNavbar;
