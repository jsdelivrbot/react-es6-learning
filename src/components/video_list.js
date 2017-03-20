import React from 'react';
import VideosListItem from './video_list-item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideosListItem video={video} />
  }); 

  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;