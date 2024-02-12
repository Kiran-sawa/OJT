import React from "react";
import raj from "../assets/raj.png";
const Image = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex items-center justify-center h-screen mr-6">
          <img src="h.png" height={100} width={100}></img>
          <h1 className="text-center text-8xl">Thank </h1>
        </div>
        <div>
          <img src="pic.jpg" height={500} width={500}></img>
        </div>
        <div className="flex items-center justify-center h-screen ml-6">
          <h1 className="text-center text-8xl">You</h1>
          <img src="emo.jpg" height={100} width={100}></img>
        </div>
      </div>
    </>
  );
};

export default Image;
