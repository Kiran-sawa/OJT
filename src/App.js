import React, { useState } from "react";
import Image from "./components/Image";

const App = () => {
  const [buttonPosition, setButtonPosition] = useState({ x: 650, y: 380 });
  const [showImage, setShowImage] = useState(false);

  const handleButtonClick = () => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    setButtonPosition({ x: randomX, y: randomY });
  };

  const handleYesButtonClick = () => {
    setShowImage(true);
  };

  return (
    <div className="flex flex-row items-center justify-center h-screen">
      {!showImage && (
        <div className="text-center bg-red">
          <h1 className="text-4xl">Will you be my valentine demsel</h1>
          <button
            className="bg-red-500 btn "
            style={{
              position: "absolute",
              top: `${buttonPosition.y}px`,
              left: `${buttonPosition.x}px`,
            }}
            onClick={handleButtonClick}
            onMouseMove={handleButtonClick}
          >
            No
          </button>
          <button
            className="mt-6 bg-green-500 btn"
            onClick={handleYesButtonClick}
          >
            Yes
          </button>
        </div>
      )}
      {showImage && <Image />}
    </div>
  );
};

export default App;
