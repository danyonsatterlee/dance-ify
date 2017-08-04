
import React, { Component } from 'react';
import loginSVG from '../login.svg';

/**
 * Our login page
 * Has a login button that hit's the login url
 */
class Login extends Component {
  render() {
    return (
      <div className="login">
        <h2>Here's our login page!</h2>
      <a href="/login"> <img src={loginSVG}></img> </a>
      </div>
    );
  }
}

export default Login