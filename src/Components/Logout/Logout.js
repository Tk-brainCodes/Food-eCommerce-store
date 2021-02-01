import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Logout.css'

const Logout = () => {
    const { logout } = useAuth0();
    const { user } = useAuth0();

    return (
        <div className="user__container">
            <div className="user__name">
               {user.name} <i className="fas fa-circle"></i>
            </div>
            <div className="button">
                <button className="log__Btn" onClick={() => logout()}>
                    Log out
             </button>
            </div>
            <div className="image">
                <img src={user.picture} alt={user.name} className="user__image" />
            </div>
        </div>
    );
};

export default Logout;
