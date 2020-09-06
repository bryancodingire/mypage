import React from 'react';
import ReacyPlayer from 'react-player';

function YoutubePlayer(){
    return(
    <div>
        <ReacyPlayer url ='https://www.youtube.com/watch?v=gGLebmo6oNM' controls={true} />
    </div>
    );
}

export default YoutubePlayer;