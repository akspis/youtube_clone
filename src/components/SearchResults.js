import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { buttonData } from "../utils/constants";
import ButtonList from "./ButtonList";
import SearchVideoCard from "./SearchVideoCard";
import { searchApi } from "../api/axios";

const SearchResults = () => {
  const [searchResult] = useSearchParams();
  const [videos, setVideos] = useState([]);

  const searchVideos = async () => {
    const data = await searchApi(searchResult.get("search"));
    setVideos(data.items);
  };

  useEffect(() => {
    searchVideos();
  }, [searchResult.get("search")]);

  return (
    <div>
      <div className="flex flex-wrap mx-52">
        {buttonData.map((item, index) => (
          <ButtonList name={item} key={index} />
        ))}
      </div>
      <div className="mx-52">
        {videos?.map((v) => (
          <Link to={"/watch?v=" + v?.id?.videoId} key={v?.id?.videoId}>
            <SearchVideoCard info={v} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
