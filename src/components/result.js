import React from 'react';
let FontAwesome = require('react-fontawesome');
class Result extends React.Component {

    render() {
        if (this.props.danceLevel === null) {
            return (
                <div></div>
            )
            //slow song
        } else if (this.props.danceLevel > 0 && this.props.danceLevel < .1) {
            return (
                <div className="col-md-6 col-md-offset-6">
                    <div className="col-md-12">
                        <h2>Is there a pulse in here?</h2>
                        <p className="album-sub">This is so not danceable.</p>
                    </div>

                    <div className="col-md-5">
                        <img className="album" src={this.props.track.album.images[0].url}/>

                    </div>

                    <div className="col-md-7">
                        <h4 className="artist-name">{this.props.track.artists[0].name}</h4>
                        <button
                            className="add-to-playlist"
                            onClick={() => this.props.handleGetPlaylist(this.props.accessToken)}>add song to a playlist
                            <FontAwesome
                                className='super-crazy-colors'
                                name='plus-circle'
                                size='1x'
                                inverse/></button>
                    </div>
                </div>
            )
            //slow song
        } else if (this.props.danceLevel >= .1 && this.props.danceLevel <= .2) {
            return (
                <div className="col-md-6 col-md-offset-6">
                    <div className="col-md-12">
                        <h2>Sorry this song isn't very danceable,</h2>
                        <p className="album-sub">
                            but if that's what you're going for you hit the nail on the nose.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="album" src={this.props.track.album.images[0].url}/>
                    </div>
                    <div className="col-md-7">
                        <h4 className="artist-name">{this.props.track.artists[0].name}</h4>

                        <button
                            className="add-to-playlist"
                            onClick={() => this.props.handleGetPlaylist(this.props.accessToken)}>add song to a playlist
                            <FontAwesome
                                className='super-crazy-colors'
                                name='plus-circle'
                                size='1x'
                                inverse/></button>
                    </div>
                </div>
            )
            //slow song
        } else if (this.props.danceLevel > .2 && this.props.danceLevel <= .3) {
            return (
                <div className="col-md-6 col-md-offset-6">
                    <div className="col-md-12">
                        <h2>This song is on the high end of undanceable</h2>
                        <p className="album-sub">
                            but if that's what you're going for you hit the nail on the nose.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="album" src={this.props.track.album.images[0].url}/>
                    </div>
                    <div className="col-md-7">
                        <h4 className="artist-name">{this.props.track.artists[0].name}</h4>

                        <button
                            className="add-to-playlist"
                            onClick={() => this.props.handleGetPlaylist(this.props.accessToken)}>add song to a playlist
                            <FontAwesome
                                className='super-crazy-colors'
                                name='plus-circle'
                                size='1x'
                                inverse/></button>
                    </div>
                </div>
            )
            //medium song
        } else if (this.props.danceLevel >= .4 && this.props.danceLevel < .5) {
            return (
                               <div className="col-md-6 col-md-offset-6">
                    <div className="col-md-12">
                         <h2>This song is sway worthy</h2>
                        <p className="album-sub">
                            If you want to slow dance, this song is for you!
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="album" src={this.props.track.album.images[0].url}/>
                    </div>
                    <div className="col-md-7">
                        <h4 className="artist-name">{this.props.track.artists[0].name}</h4>

                        <button
                            className="add-to-playlist"
                            onClick={() => this.props.handleGetPlaylist(this.props.accessToken)}>add song to a playlist
                            <FontAwesome
                                className='super-crazy-colors'
                                name='plus-circle'
                                size='1x'
                                inverse/></button>
                    </div>
                </div>
             

            )
        } else if (this.props.danceLevel >= .5 && this.props.danceLevel < .6) {
            return (
                                    <div className="col-md-6 col-md-offset-6">
                    <div className="col-md-12">
                         <h2>Not party worthy</h2>
                        <p className="album-sub">
                            unless you want to slow dance.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="album" src={this.props.track.album.images[0].url}/>
                    </div>
                    <div className="col-md-7">
                        <h4 className="artist-name">{this.props.track.artists[0].name}</h4>

                        <button
                            className="add-to-playlist"
                            onClick={() => this.props.handleGetPlaylist(this.props.accessToken)}>add song to a playlist
                            <FontAwesome
                                className='super-crazy-colors'
                                name='plus-circle'
                                size='1x'
                                inverse/></button>
                    </div>
                </div>
        
               
            )
        } else if (this.props.danceLevel >= .6 && this.props.danceLevel < .7) {
            return (
                          <div className="col-md-6 col-md-offset-6">
                    <div className="col-md-12">
                         <h2>Slow Dance</h2>
                        <p className="album-sub">
                            if you're in that kind of a mood.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="album" src={this.props.track.album.images[0].url}/>
                    </div>
                    <div className="col-md-7">
                        <h4 className="artist-name">{this.props.track.artists[0].name}</h4>

                        <button
                            className="add-to-playlist"
                            onClick={() => this.props.handleGetPlaylist(this.props.accessToken)}>add song to a playlist
                            <FontAwesome
                                className='super-crazy-colors'
                                name='plus-circle'
                                size='1x'
                                inverse/></button>
                    </div>
                </div>
               
                
            )

            //fast dance song
        } else if (this.props.danceLevel >= .7 && this.props.danceLevel < .8) {
            return (
                                       <div className="col-md-6 col-md-offset-6">
                    <div className="col-md-12">
                         <h2>Dance it up!</h2>
                        <p className="album-sub">
                            Put on your dancing shoes! This song is sure to get the party started!
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="album" src={this.props.track.album.images[0].url}/>
                    </div>
                    <div className="col-md-7">
                        <h4 className="artist-name">{this.props.track.artists[0].name}</h4>

                        <button
                            className="add-to-playlist"
                            onClick={() => this.props.handleGetPlaylist(this.props.accessToken)}>Add Song to a Playlist
                            <FontAwesome
                                className='super-crazy-colors'
                                name='plus-circle'
                                size='1x'
                                inverse/></button>
                    </div>
                </div>
            )
        } else if (this.props.danceLevel >= .8 && this.props.danceLevel < .9) {
            return (

                                                <div className="col-md-6 col-md-offset-6">
                    <div className="col-md-12">
                         <h2>Sure to get the party started!</h2>
                        <p className="album-sub">
                            This song will get even the wallflower shoes tapping!
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="album" src={this.props.track.album.images[0].url}/>
                    </div>
                    <div className="col-md-7">
                        <h4 className="artist-name">{this.props.track.artists[0].name}</h4>

                        <button
                            className="add-to-playlist"
                            onClick={() => this.props.handleGetPlaylist(this.props.accessToken)}>add song to a playlist
                            <FontAwesome
                                className='super-crazy-colors'
                                name='plus-circle'
                                size='1x'
                                inverse/></button>
                    </div>
                </div>
     
            )

        } else if (this.props.danceLevel >= .9 && this.props.danceLevel <= 1.0) {
            return (

                                                                <div className="col-md-6 col-md-offset-6">
                    <div className="col-md-12">
                         <h2>Bring the house down</h2>
                        <p className="album-sub">
                            You can't stop the beat! Best dance song!
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="album" src={this.props.track.album.images[0].url}/>
                    </div>
                    <div className="col-md-7">
                        <h4 className="artist-name">{this.props.track.artists[0].name}</h4>

                        <button
                            className="add-to-playlist"
                            onClick={() => this.props.handleGetPlaylist(this.props.accessToken)}>add song to a playlist
                            <FontAwesome
                                className='super-crazy-colors'
                                name='plus-circle'
                                size='1x'
                                inverse/></button>
                    </div>
                </div>

            )

        } else {
            return (
                <div>
                    <h2>Sorry we couldn't find your song</h2>
                </div>
            )
        }
    }
}

export default Result;