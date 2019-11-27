import React from 'react';
import YouTube from 'react-youtube';

//css
// import "../../Assets/css/video-react.css";

const Layout = ()=>{

    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };
const onReady=(e) => {
    event.target.pauseVideo();
}
    return(
        <YouTube
        videoId="m3RLL4R43ro"
        opts={opts}
        onReady={onReady}
      />
    );
};

export default Layout;
