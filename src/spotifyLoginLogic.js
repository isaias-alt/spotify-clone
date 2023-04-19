export const getTokenFromURL = () => {
  return window.location.hash.substring(1).split('&')
    .reduce((initial, item) => {
      const parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
      return initial
    }, {})
}

const endpoint = 'https://accounts.spotify.com/authorize'
const clientID = '971583d86df04596ad9f2e3757b81d66'
// const redirectUri = 'http://localhost:5173/'
const redirectURI = 'https://super-spotify-clone.vercel.app/'
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state'
]
export const LOGIN_URL = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scope=${scopes.join('%20')}&show_dialog=true`
