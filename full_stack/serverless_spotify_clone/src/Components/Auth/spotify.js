/**
 * https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
 */

// 1. as soon as you click the `Login with Spotify` button - it will redirect you here.
export const authEndpoint = 'https://accounts.spotify.com/authorize';

// 2. Redirect to Spotify login page

// 3. Redirect to home page once logged in
const redirectUrl = 'http://localhost:3000/';

const clientId = 'b26f6a1b786a433aa3cbcf21f3babad6';

// User scopes - allowing our serverless spotify clone app to have the following permissions

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      // #accessToken=mySecretTokenKey&name=Albi
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
