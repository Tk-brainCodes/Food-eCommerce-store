import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const { loginWithPopup } = useAuth0();
    return (
            <button
                onClick={() => loginWithPopup()}
            >
                Login
          </button>
    )
}

export default Login;
