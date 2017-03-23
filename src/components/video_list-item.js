import React from 'react';

// Curly braces mean that this first object in this argument
// has a property 'video' please grab that video and 
// declare a new variable called 'video'
const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return(
    <li
      className="list-group-item"
      onClick={() => onVideoSelect(video)}
    >
      <div className="video-list media">
        <div className="media-left">
          <img
            src={imageUrl}
            className="media-object"
          />
        </div>
      </div>

      <div className="media-body">
        <div className="media-heading">
            {video.snippet.title}
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;