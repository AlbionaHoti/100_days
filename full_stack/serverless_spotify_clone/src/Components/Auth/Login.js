import './Login.css';

import React from 'react';
import SpotifyLogo from '../../Assets/images/SpotifyLogo.png';
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className="login">
      <img src={SpotifyLogo} alt="" />
      {/* Spotify logo */}

      {/* Login with Spotify button */}
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
