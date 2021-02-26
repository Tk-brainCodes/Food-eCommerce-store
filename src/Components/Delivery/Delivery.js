import React from 'react';
import './Delivery.css';
import { useAuth0 } from '@auth0/auth0-react';


const Delivery = () => {
    const { user } = useAuth0();

    return (
        <div className="delivery__">
            <p className="h1__">Hello,<br/> {user.name} </p>
        </div>
    )
}

export default Delivery;
