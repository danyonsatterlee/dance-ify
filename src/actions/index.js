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
      console.log(response.data.tracks.items[0].id);
      // console.log(response.data.tracks.items[0].images[1].url)
      dispatch(getDance(response.data.tracks.items[0].id, accessToken))
       dispatch(setData())
       
    }).catch((error)=>{
            throw error;
        });
    }

}


export function getDance(id,accessToken){
  return(dispatch)=>{
    return axios.get(`https://api.spotify.com/v1/audio-features/${id}`, {headers: {"Authorization": `Bearer ${accessToken}`}}).then((response)=>{
      console.log(response.data.danceability)
      let howDance= response.data.danceability;
      // if(howDance>0 && howDance<.4){
      //    dispatch(getNoDance(howDance, accessToken));
       
    

      // } else if(howDance>=.4 && howDance< .7){
      //   dispatch(getSlowDance(howDance, accessToken));
        

      // } else if(howDance<=.7 && howDance<=1.0){
      //   dispatch(getVeryDance(howDance, accessToken));

      // }
   
      dispatch(setDanceLevel(howDance))
    }).catch((error)=>{
            throw error;
        });
    }
}

export function setDanceLevel(level){
  return {type: "SET_DANCE_LEVEL", level}

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



