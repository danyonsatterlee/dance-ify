import React from 'react';

class Result extends React.Component {

    render() {
        if (this.props.danceLevel === null) {
            return (
                <div></div>
            )
//slow song
        } else if (this.props.danceLevel > 0 && this.props.danceLevel < .1) {
            return (
                <div>
                    <h2>Is there a pulse in here?</h2>
                    <p>
                       This is so not danceable.
                    </p>
                </div>
            )
//slow song
        } else if (this.props.danceLevel >= .1 && this.props.danceLevel <= .2) {
            return (
                <div>
                    <h2>Sorry this song isn't very danceable,</h2>
                    <p>
                        but if that's what you're going for you hit the nail on the nose.
                    </p>
                </div>
            )
//slow song
        }  else if (this.props.danceLevel > .2 && this.props.danceLevel <= .3) {
            return (
                <div>
                    <h2>This song is on the high end of indanceable</h2>
                    <p>
                        but if that's what you're going for you hit the nail on the nose.
                    </p>
                </div>
            )
//medium song
        } else if (this.props.danceLevel >= .4 && this.props.danceLevel < .5) {
            return (
                <div>
                    <h2>This song is sway worthy</h2>
                    <p>
                        If you want to slow dance, this song is for you!
                    </p>
                </div>
            )
            }else if (this.props.danceLevel >= .4 && this.props.danceLevel < .7) {
            return (
                <div>
                    <h2>This song is sway worthy</h2>
                    <p>
                        If you want to slow dance, this song is for you!
                    </p>
                </div>
            )
            
//fast dance song
        } else if (this.props.danceLevel >= .7 && this.props.danceLevel <=1.0) {
            return (
                <div>
                    <h2>Dance it up!</h2>
                    <p>
                        Put on your dancing shoes! This song is sure to get the party started! 
                    </p>
                </div>
            )

        } else {
            return (
                <div><h2>Sorry we couldn't find your song</h2></div>
            )
        }
    }
}

export default Result;