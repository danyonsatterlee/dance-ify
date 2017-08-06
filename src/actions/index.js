import Spotify from 'spotify-web-api-js';
import axios from 'axios';
const spotifyApi = new Spotify();



export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const SPOTIFY_ME_BEGIN = 'SPOTIFY_ME_BEGIN';
export const SPOTIFY_ME_SUCCESS = 'SPOTIFY_ME_SUCCESS';
export const SPOTIFY_ME_FAILURE = 'SPOTIFY_ME_FAILURE';



export function setTokens({accessToken, refreshToken}) {
  if (accessToken) {
    spotifyApi.setAccessToken(accessToken);
  }
  return { type: SPOTIFY_TOKENS, accessToken, refreshToken };
}


export function getMyInfo() {
  return dispatch => {
    dispatch({ type: SPOTIFY_ME_BEGIN});
    spotifyApi.getMe().then(data => {
      dispatch({ type: SPOTIFY_ME_SUCCESS, data: data });
    }).catch(e => {
      dispatch({ type: SPOTIFY_ME_FAILURE, error: e });
    });
  };
}

export function setData(data){
    return{
        type:"SET_DATA",
        data
    }
}


export function getTrack(track,accessToken){
  return(dispatch)=>{
    return axios.get(`https://api.spotify.com/v1/search?q=track:${track}&type=track`, {headers: {"Authorization": `Bearer ${accessToken}`}}).then((response)=>{
      console.log(response.data);
      dispatch(setData(response.data))
    }).catch((error)=>{
            throw error;
        });
    }

}