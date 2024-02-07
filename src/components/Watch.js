import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../redux/appSlice";
import { useDispatch } from "react-redux";
import LiveChat from "./LiveChat";
import { addMessage } from "../redux/chatSlice";

const Watch = () => {
  const [param] = useSearchParams();
  const [liveText, setLiveText] = useState("");
  const dispatch = useDispatch();

  const liveChat = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Akshay Pisal",
        message: liveText,
      })
    );
    setLiveText("");
  };
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="mx-20 mt-4 flex w-full">
      <div>
        <iframe
          className="rounded-xl"
          width="1200"
          height="700"
          src={"https://www.youtube-nocookie.com/embed/" + param.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <div className="mx-5 p-2 w-full border border-black rounded-lg h-[700px] flex">
          <LiveChat />
        </div>
        <form
          className="mx-5 my-2 p-2 w-full border border-black rounded-lg flex justify-evenly"
          onSubmit={liveChat}
        >
          <input
            type="text"
            className="p-2 outline-none"
            value={liveText}
            onChange={(e) => setLiveText(e.target.value)}
          />
          <button className="bg-gray-300 p-2 text-sm rounded">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Watch;
