import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store?.app?.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="w-48 border shadow-lg border-t-transparent">
      <div className="mt-3 py-2 px-10 border-b-gray-400">
        <ul>
          <li className="">
            <Link to={"/"}>Home</Link>
          </li>
          <li>Shorts</li>
          <li>Subscription</li>
        </ul>
      </div>
      <div className="mt-3 py-2 px-10  border-b-gray-400">
        <h1 className="text-lg font-bold">You</h1>
        <ul>
          <li>Your Channel</li>
          <li>History</li>
          <li>Your videos</li>
          <li>Watch later</li>
        </ul>
      </div>
      <div className="mt-3 py-2 px-10  border-b-gray-400">
        <h1 className="text-lg font-bold">Explore</h1>
        <ul>
          <li>Gaming</li>
          <li>Trending</li>
          <li>Shoping</li>
          <li>Music</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
