import React from "react";
import { IMG_RELATIVE_PATHS, PROFILE_IMG } from "../utils/imgRelativePaths";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 shadow-md">
      <img src={IMG_RELATIVE_PATHS.PROFILE_IMG} className="h-6" />
      <span className="font-bold mx-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
