import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Route, IndexRoute} from "react-router-dom";
import {Provider} from "react-redux";
//this gets the thing that makes the store
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { createHistory } from 'history';
//this gets the reducer to handle state
import reducers from "./reducers";
import User from "./containers/user.js";
import Error from "./containers/error.js";
import Home from "./containers/home.js";
import Login from "./containers/login.js";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component{
    render(){
        return(
<BrowserRouter>
        <Switch>
          <Route  path="/" component={Home}/>
            {/*<Route exact path="/"  component={Login} />*/}
            <Route path="/user/:accessToken/:refreshToken" component={User} />
            <Route path="/error/:errorMsg" component={Error} />
  
        </Switch>
      </BrowserRouter>
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

