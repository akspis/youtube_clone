import React from "react";

const SearchVideoCard = ({ info }) => {
  const { channelTitle, title, thumbnails, description } = info?.snippet;

  return (
    <div className="m-4 shadow-lg flex p-2">
      <div className="px-1">
        <img src={thumbnails?.medium?.url} alt="video" className="rounded-lg" />
      </div>
      <div className="px-4">
        <ul>
          <span className="py-2">{title}</span>
          <div className="py-2 flex">
            <span>{channelTitle}</span>
          </div>
          <span>{description}</span>
        </ul>
      </div>
    </div>
  );
};

export default SearchVideoCard;
