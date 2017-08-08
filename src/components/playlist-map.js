import React from "react";
import Playlist from "./playlist.js";

class PlaylistMap extends React.Component {
    genPlaylistMap() {
        console.log(this.props);
        // console.log(this.props.playlist) console.log("didn't break here 1")
        return this
            .props
            .playlist
            .map((item, index) => {
                return <Playlist track={this.props.track} handleSong={this.props.handleSong} key={index + item.name} accessToken={this.props.accessToken} playlist={item}/>
            })
    }
    render() {
        return (
            <div>
                {this.genPlaylistMap()}

            </div>

        );
    }
}

export default PlaylistMap;