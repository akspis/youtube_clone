import React from "react";
import ButtonList from "./ButtonList";
import { buttonData } from "../utils/constants";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div>
      <div className="flex flex-wrap mx-10">
        {buttonData.map((item, index) => (
          <ButtonList name={item} key={index} />
        ))}
      </div>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
