import React from "react";
let FontAwesome = require('react-fontawesome');
// import WOW from 'wowjs';
class Playlist extends React.Component{
// ComponentDidMount(){
//     new WOW.WOW().init;
// }

    render(){
       console.log(this.props.track.uri)
        return(
<div className="col-md-12 playlist-bottom " data-wow-offset="70" data-wow-iteration="1">
     <div className="col-md-2 col-md-offset-2 ">
    <img className="playlist-img" src={this.props.playlist.images[0].url}/> 
    </div>
    <div className="col-md-8">
    <h4 className="artist-name">{this.props.playlist.name}</h4>
    <button className="add-to-playlist-2"onClick={()=>{this.props.handleSong(this.props.playlist.href, this.props.track.uri, this.props.accessToken)}}>Add Song to Playlist  <FontAwesome
       
        name='plus-circle'
        size='1x'
        inverse
       
      /></button>
      </div>
      <hr/>
    
</div>
        );
    }
}

export default Playlist;