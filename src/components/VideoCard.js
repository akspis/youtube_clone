import React from "react";

const VideoCard = ({ info }) => {
  const { channelTitle, title, thumbnails } = info?.snippet;
  return (
    <div className="m-4 w-72 shadow-lg">
      <img src={thumbnails?.medium?.url} alt="video" className="rounded-lg" />
      <ul>
        <li className="py-2">{title}</li>
        <li className="">{channelTitle}</li>
        <li>{info?.statistics?.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
