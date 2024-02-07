import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import axios from "axios";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await axios.get(YOUTUBE_VIDEOS_API);
    setVideos(data?.data?.items);
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="flex flex-wrap mx-10">
      {videos?.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
