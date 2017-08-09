import React from "react";
import FormCon from "./form-container.js"
import ImageCon from './image-container.js';
import ResultCon from "./result-container.js";
import PlaylistCon from "./playlist-container.js"
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index.js';


class Home extends React.Component {
    componentDidMount() {
        // console.log("hello");
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
                      <div className="col-md-12">
                          <div className="fill"></div>
                      </div>
                    {/*<ImageCon></ImageCon>*/}
                    <FormCon></FormCon>
                    <ResultCon></ResultCon>
                  
                    <PlaylistCon></PlaylistCon>
                    
                </div>
            </div>
         
        );
    }
}

export default connect(state => state, actionCreators)(Home);