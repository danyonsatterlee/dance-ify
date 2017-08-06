import React from "react";
import FormCon from "./form-container.js"
import ImageCon from './image-container.js';

import {connect} from 'react-redux';
import * as actionCreators from '../actions/index.js';


class Home extends React.Component {
    componentDidMount() {
        console.log("hello");
        // params injected via react-router, dispatch injected via connect
        const {accessToken, refreshToken} = this.props.match.params;
        this
            .props
            .setTokens({accessToken, refreshToken});
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <ImageCon></ImageCon>
                    <FormCon></FormCon>
                </div>
            </div>
        );
    }
}

export default connect(state => state, actionCreators)(Home);