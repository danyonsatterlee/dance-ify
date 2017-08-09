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


export function getId(track,accessToken){
  return(dispatch)=>{
    return axios.get(`https://api.spotify.com/v1/search?q=track:${track}&type=track`, {headers: {"Authorization": `Bearer ${accessToken}`}}).then((response)=>{
      console.log(response.data.tracks.items[0]);
      console.log(response.data.tracks.items[0].uri)
      // console.log(response.data.tracks.items[0].album.images[0].url)
      dispatch(getDance(response.data.tracks.items[0].id, accessToken))
      dispatch(setData(response.data.tracks.items[0], accessToken))
    
       
    }).catch((error)=>{
            throw error;
        });
    }

}


export function getDance(id,accessToken){
  return(dispatch)=>{
    return axios.get(`https://api.spotify.com/v1/audio-features/${id}`, {headers: {"Authorization": `Bearer ${accessToken}`}}).then((response)=>{
      // console.log(response.data.danceability)
      let howDance= response.data.danceability;
      
   
      dispatch(setDanceLevel(howDance))
    }).catch((error)=>{
            throw error;
        });
    }
}

export function setDanceLevel(level){
  return {type: "SET_DANCE_LEVEL", level}

}


export function getPlaylists(accessToken){
  // console.log(accessToken)
  return(dispatch)=>{
    axios.get(`https://api.spotify.com/v1/me/playlists`, {headers: {"Authorization": `Bearer ${accessToken}`}}).then((response)=>{

      dispatch(setPlaylist(response.data.items))
      
       
    }).catch((error)=>{
            throw error;
        });
    }

}

export function setPlaylist(playlist){
    return{
        type:"SET_PLAYLIST",
        playlist
    }
}

export function addToPlayList(url,track, accessToken){
  console.log(accessToken)
  return(dispatch)=>{
    axios.post(url+"/tracks?uris="+track, null, {headers: {"Authorization": `Bearer ${accessToken}`}}).then((response)=>{
      
     console.log(response.data)
      dispatch(()=>{})
       
    }).catch((error)=>{
            throw error;
        });
    }

}







// export function loadDanceData(){
//     return(dispatch)=>{
//         return axios.get("http://localhost:8080/dance").then((reponse)=>{
//             dispatch(setData(reponse.data.data))
//         }).catch((error)=>{
//             throw error;
//         });
//     }

// }



