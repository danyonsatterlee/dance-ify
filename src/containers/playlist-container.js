import React from "react";
import Form from "../components/form.js";
import * as actionCreators from "../actions/";
import { connect } from "react-redux";
import PlaylistMap from "../components/playlist-map.js";
class PlaylistCon extends React.Component {
   
    
    render() {
        return (
         
                    <PlaylistMap  track={this.props.track} handleSong={this.props.addToPlayList} playlist={this.props.playlist} accessToken={this.props.accessToken} ></PlaylistMap>
          
        );
    }
}

const mapStateToProps = (state)=>{
     return state;
 }



export default connect(mapStateToProps, actionCreators)(PlaylistCon);