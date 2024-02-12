import React from "react";

const Image = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-4xl text-center md:text-8xl">Thank </h1>
        <img src="h.png" alt="T" height={100} width={100}></img>
      </div>
      <div className="mb-6">
        <img src="pic.jpg" alt="t" height={300} width={300}></img>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-center md:text-8xl">You</h1>
        <img src="emo.jpg" alt="r" height={100} width={100}></img>
      </div>
    </div>
  );
};

export default Image;
