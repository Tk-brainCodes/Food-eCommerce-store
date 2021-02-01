import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Auth0ProviderComp from './Auth0-Provider/auth0-provider';

ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderComp>
      <App />
    </Auth0ProviderComp>
  </BrowserRouter>,
  document.getElementById('root')
);
