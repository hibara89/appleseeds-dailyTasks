import React from "react";

import VideoItem from "./videoItem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
