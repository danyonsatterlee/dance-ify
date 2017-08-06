import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
//this gets the thing that makes the store
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
//this gets the reducer to handle state
import reducers from "./reducers";
import Error from "./containers/error.js";
import Home from "./containers/home.js";
import Login from "./containers/login.js";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/home/:accessToken/:refreshToken" component={Home}/>
                    <Route exact path="/error/:errorMsg" component={Error}/>
                </Switch>
            </HashRouter>
        );
    }
}

ReactDOM.render(
    <Provider store={store}><App/></Provider>, document.getElementById('root'));
