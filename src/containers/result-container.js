import React from "react";
import Form from "../components/form.js";
import * as actionCreators from "../actions/";
import { connect } from "react-redux";
import Result from "../components/result.js";

class ResultCon extends React.Component {
   
    
    render() {
        return (
    
                    <Result accessToken={this.props.accessToken} handleGetPlaylist={this.props.getPlaylists} track={this.props.track} danceLevel={this.props.danceLevel} ></Result>
          
       
        );
    }
}

const mapStateToProps = (state)=>{
     return state;
 }



export default connect(mapStateToProps, actionCreators)(ResultCon);