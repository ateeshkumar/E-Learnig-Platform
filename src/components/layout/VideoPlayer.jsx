import React from 'react';
import './css/videoplayer.css';
const VideoPlayer = ({video,width,heigth}) => {
  return (
    <>
      <video
        controls
        src={video}
        width={width}
        height={heigth}/>
    </>
  )
}

export default VideoPlayer;