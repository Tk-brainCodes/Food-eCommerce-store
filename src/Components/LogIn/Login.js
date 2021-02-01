import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css';

const Login = () => {
    const { loginWithPopup } = useAuth0();
    return (
        <button
             onClick={() => loginWithPopup()}
             className="log__Btn"
        >
            Login or Sign Up
        </button>
    )
}

export default Login;
