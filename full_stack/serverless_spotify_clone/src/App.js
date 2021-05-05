import './App.css';

import React, { useEffect, useState } from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

import Login from './Components/Auth/Login';
import Player from './Components/Player/Player';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromUrl } from './Components/Auth/spotify';
import { useDataValue } from './Components/Shared/Data';

// an instance of the spotify that will allow us to communicate back and forth with spotify
const spotify = new SpotifyWebApi();

export const initialState = atom({
  key: 'initialState',
  default: {
    user: null,
    playlists: [],
    playing: false,
    item: null,
  },
});

export const authToken = atom({
  key: 'authToken',
  default: '',
  // 'BQBVKDaNMZ38XaC8deFLAtoF3x0LP19EQ8Ld8FDi9thAe0Lf1SLWe29p1u3IuGe6w5L9sUvYK-k-DIQE_t828NDlbb8JIKk32RicxMilGJGYodljiu2xeQwsBbCH0_0ZZoW-10oxYk1RvkbwZ5Ijr3vY91z4Yly_fHFxrlfOWD7sLuTLcaxN',
});

function App() {
  const [token, setToken] = useRecoilState(authToken);
  // const [{}, dispatch] = useDataValue();
  const [userProfile, setUserProfile] = useRecoilState(initialState);

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ''; // for security reasons: we're removing the access token from the url
    const _token = hash.access_token;

    console.log('token: ', _token);

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token); // giving the access token to spotify api -> here is your magic key that
      // will allow you to safely talk back and forth between react and spotify api
      spotify.getMe().then((user) => {
        // console.log('Show me the user: ', user);
        setUserProfile((user) => [
          {
            user: user.user,
          },
        ]);
      });

      spotify.getUserPlaylists().then((playlists) => {
        // setUserProfile({ ...playlists });
        console.log('playlists: ', playlists.items);
        setUserProfile((oldUser) => [
          ...oldUser,
          {
            playlists: playlists.items,
          },
        ]);

        console.log('userprofile: ', userProfile);
      });
    }
  }, [setToken, setUserProfile]);

  return (
    <div className="container">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
