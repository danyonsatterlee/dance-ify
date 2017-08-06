let defaultState = {
  accessToken: null,
  refreshToken: null,
  track: {},
  user: {
    loading: false,
    country: null,
    display_name: null,
    email: null,
    external_urls: {},
    followers: {},
    href: null,
    id: null,
    images: [],
    product: null,
    type: null,
    uri: null
  }
}
// if i want multiple songs make track an array and look at the socket.io reducers as an example

const mainReducer = (state = defaultState, action) => {
  if (action.type === "SET_DATA") {
    return {
      ...state,
      track: action.data
    }
  } else if (action.type === "SPOTIFY_TOKENS") {
    const {accessToken, refreshToken} = action;
    console.log(accessToken);
    return Object.assign({}, state, {accessToken, refreshToken});

  } else if (action.type === "SPOTIFY_ME_BEGIN") {
    return Object.assign({}, state, {
      user: Object.assign({}, state.user, {loading: true})
    });
  } else if (action.type === "SPOTIFY_ME_SUCCESS") {
    return Object.assign({}, state, {
      user: Object.assign({}, state.user, action.data, {loading: false})
    });

  } else if (action.type === "SPOTIFY_ME_FAILURE") {
    return state;

  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;

// import {   SET_DATA, SPOTIFY_TOKENS, SPOTIFY_ME_BEGIN, SPOTIFY_ME_SUCCESS,
// SPOTIFY_ME_FAILURE } from '../actions/index.js'; /** The initial state; no
// tokens and no user info */ /**
//  * Our reducer  */ export default function reduce(state = initialState,
// action) {   switch (action.type) {     case SET_DATA:             return
// artist: action.data   // when we get the tokens... set the tokens!   case
// SPOTIFY_TOKENS:     const {accessToken, refreshToken} = action;     return
// Object.assign({}, state, {accessToken, refreshToken});   // set our loading
// property when the loading begins   case SPOTIFY_ME_BEGIN:     return
// Object.assign({}, state, {       user: Object.assign({}, state.user,
// {loading: true})     });   // when we get the data merge it in   case
// SPOTIFY_ME_SUCCESS:     return Object.assign({}, state, {       user:
// Object.assign({}, state.user, action.data, {loading: false})     });   //
// currently no failure state :(   case SPOTIFY_ME_FAILURE:     return state;
// default:     return state;   } } const mainReducer =(state = defaultState,
// action)=>{ export default mainReducer;