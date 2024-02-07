import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import { randomNameGenrator, randomStringGenrator } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const message = useSelector((store) => store?.chat.message);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: randomNameGenrator(),
          message: randomStringGenrator(20),
        })
      );
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="w-full overflow-y-scroll bg-slate-100 rounded-lg flex flex-col-reverse">
      {message?.map((m, i) => (
        <ChatMessage key={i} name={m.name} message={m.message} />
      ))}
    </div>
  );
};

export default LiveChat;
