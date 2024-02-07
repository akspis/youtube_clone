import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { YOUTUBE_SUGG_API } from "../utils/constants";
import { cacheSuggestion } from "../redux/cacheSlice";
import { IMG_RELATIVE_PATHS } from "../utils/imgRelativePaths";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggetions] = useState(false);
  const [suggetions, setSuggestion] = useState([]);
  const cacheSugg = useSelector((store) => store.cache);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMenu = () => {
    dispatch(toggleMenu());
  };

  const getSuggetions = async () => {
    const data = await fetch(YOUTUBE_SUGG_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    dispatch(
      cacheSuggestion({
        [searchQuery]: json[1],
      })
    );
  };

  const serachVideos = async (s, sug) => {
    console.log("s", s);
    if (sug === "suggestion") setSearchQuery(s);
    setShowSuggetions(false);
    navigate(`results?search=${searchQuery}`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // if (cacheSugg[searchQuery]) {
      //   setSearchQuery(cacheSugg[searchQuery]);
      // } else {
      getSuggetions();
      // }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col shadow-sm">
      <div className="flex col-span-1">
        <img
          onClick={handleMenu}
          className="h-10 my-4 mx-3"
          src={IMG_RELATIVE_PATHS.HAMBURGER_ICON}
          alt="menu"
        />
        <img
          className="h-20 cursor-pointer"
          src={IMG_RELATIVE_PATHS.YOUTUBE_LOGO}
          alt="youtube"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="pt-4 w-full col-span-10">
        <div className="mx-96 flex">
          <input
            type="text"
            className="w-3/4 border border-gray-300 my-2 py-1 px-2 rounded-l-full border-r-0 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e) => setShowSuggetions(true)}
          />
          <img
            src={IMG_RELATIVE_PATHS.SEARCH_ICON}
            onClick={serachVideos}
            alt="search"
            className="h-[34px] mt-[8px] border border-gray-300 py-1 px-2 bg-gray-300 rounded-r-full border-l-0"
          />
        </div>
        {showSuggestions && (
          <div className="absolute w-[39rem] bg-white rounded-lg shadow-lg mx-96">
            <div>
              {suggetions?.map((s, i) => (
                <div
                  className="flex items-center  hover:bg-gray-100"
                  key={i}
                  onClick={() => serachVideos(s, "suggestion")}
                >
                  <img
                    src={IMG_RELATIVE_PATHS.SEARCH_ICON}
                    alt="s"
                    className="h-7 px-2"
                  />
                  <span key={s} className="mx-1 p-3">
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <img
          className="h-10"
          src={IMG_RELATIVE_PATHS.PROFILE_IMG}
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Header;
