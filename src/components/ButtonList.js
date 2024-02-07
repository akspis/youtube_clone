import React from "react";

const ButtonList = ({ name }) => {
  return (
    <div className="mx-1 my-4 bg-gray-300 rounded-lg">
      <button className="py-2 px-4 ">{name}</button>
    </div>
  );
};

export default ButtonList;
