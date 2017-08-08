import React from "react";
let FontAwesome = require('react-fontawesome');
class Playlist extends React.Component{

    render(){
       console.log(this.props.track.uri)
        return(
<div>
    <img className="playlist-img" src={this.props.playlist.images[0].url}/> 
    <h4>{this.props.playlist.name}</h4>
    <p onClick={()=>{this.props.handleSong(this.props.playlist.href, this.props.track.uri, this.props.accessToken)}}>Add Song to Playlist  <FontAwesome
        className='super-crazy-colors'
        name='plus-circle'
        size='1x'
        inverse
       
      /></p>
      
    
</div>
        );
    }
}

export default Playlist;