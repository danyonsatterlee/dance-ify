import React, {Component} from 'react';
import loginSVG from '../login.png';

/**
 * Our login page
 * Has a login button that hit's the login url
 */
class Login extends Component {
  render() {
    return (
      <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-md-offset-1">
            <h1 className="login-main">dance-ify</h1>
            <div className="col-md-8 col-md-offset-4">
              <p className="login-sub">Find tunes that are danceable.
        <br/> Add them to your playlist on Spotify.</p>
            </div>
                

          </div>
          <div className="col-md-5 col-md-offset-1">
            <a href="http://localhost:8080/login">
              <img className="login-icon " src={loginSVG}></img>
            </a>
       
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Login